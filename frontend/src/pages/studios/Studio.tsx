import { FC, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Tab, Tabs } from "react-bootstrap";
import { sortBy } from "lodash-es";

import { Studio_findStudio as Studio } from "src/graphql/definitions/Studio";
import {
  usePendingEditsCount,
  TargetTypeEnum,
  CriterionModifier,
} from "src/graphql";
import { EditList, SceneList, URLList } from "src/components/list";

import {
  getImage,
  createHref,
  studioHref,
  canEdit,
  formatPendingEdits,
  getUrlBySite,
} from "src/utils";
import { ROUTE_STUDIO_EDIT, ROUTE_STUDIO_DELETE } from "src/constants/route";
import { FavoriteStar } from "src/components/fragments";
import AuthContext from "src/AuthContext";

const DEFAULT_TAB = "scenes";

interface Props {
  studio: Studio;
}

const StudioComponent: FC<Props> = ({ studio }) => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const activeTab = history.location.hash?.slice(1) || DEFAULT_TAB;

  const { data: editData } = usePendingEditsCount({
    type: TargetTypeEnum.STUDIO,
    id: studio.id,
  });
  const pendingEditCount = editData?.queryEdits.count;

  const studioImage = getImage(studio.images, "landscape");

  const subStudios = sortBy(studio.child_studios, (s) => s.name).map((s) => (
    <li key={s.id}>
      <Link to={studioHref(s)}>{s.name}</Link>
    </li>
  ));

  const setTab = (tab: string | null) =>
    history.push({ hash: tab === DEFAULT_TAB ? "" : `#${tab}` });

  const homeURL = getUrlBySite(studio.urls, "Home");

  return (
    <>
      <div className="d-flex">
        <div className="studio-title me-auto">
          <h3>
            {studio.deleted ? (
              <del>{studio.name}</del>
            ) : (
              <span>{studio.name}</span>
            )}
            <FavoriteStar
              entity={studio}
              entityType="studio"
              interactable
              className="ps-2"
            />
          </h3>
          {homeURL && (
            <h6>
              <a href={homeURL} target="_blank" rel="noreferrer noopener">
                {homeURL}
              </a>
            </h6>
          )}
          {studio.parent && (
            <span>
              Part of{" "}
              <b>
                <Link to={studioHref(studio.parent)}>{studio.parent.name}</Link>
              </b>
            </span>
          )}
        </div>
        {studioImage && (
          <div className="studio-photo">
            <img src={getImage(studio.images, "landscape")} alt="Studio logo" />
          </div>
        )}
        <div>
          {canEdit(auth.user) && !studio.deleted && (
            <>
              <Link to={createHref(ROUTE_STUDIO_EDIT, studio)} className="ms-2">
                <Button>Edit</Button>
              </Link>
              <Link
                to={createHref(ROUTE_STUDIO_DELETE, studio)}
                className="ms-2"
              >
                <Button variant="danger">Delete</Button>
              </Link>
            </>
          )}
        </div>
      </div>
      {subStudios.length > 0 && (
        <>
          <h6>Sub Studios</h6>
          <div className="sub-studio-list">
            <ul>{subStudios}</ul>
          </div>
        </>
      )}
      <Tabs
        activeKey={activeTab}
        id="studio-tabs"
        mountOnEnter
        onSelect={setTab}
      >
        <Tab
          eventKey="scenes"
          title={subStudios.length > 0 ? "All Scenes" : "Scenes"}
        >
          <SceneList filter={{ parentStudio: studio.id }} />
        </Tab>
        {subStudios.length > 0 && (
          <Tab eventKey="studio-scenes" title="Studio Scenes">
            <SceneList
              filter={{
                studios: {
                  value: [studio.id],
                  modifier: CriterionModifier.INCLUDES,
                },
              }}
            />
          </Tab>
        )}
        <Tab eventKey="links" title="Links">
          <URLList urls={studio.urls} />
        </Tab>
        <Tab
          eventKey="edits"
          title={`Edits${formatPendingEdits(pendingEditCount)}`}
          tabClassName={pendingEditCount ? "PendingEditTab" : ""}
        >
          <EditList type={TargetTypeEnum.STUDIO} id={studio.id} />
        </Tab>
      </Tabs>
    </>
  );
};

export default StudioComponent;