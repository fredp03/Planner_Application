// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: RPnMKWgCkZkYcGGLNc86X
// Component: DDjcV2BrZr0RU
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  usePlasmicDataConfig,
  executePlasmicDataOp,
  usePlasmicDataOp
} from "@plasmicapp/react-web/lib/data-sources";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import TextInput from "../../TextInput"; // plasmic-import: n4afuKb3I9l31b/component
import RomfordData from "../../RomfordData"; // plasmic-import: Ojh5kx57LiqlYD/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_copy_of_best_main_a_pp.module.css"; // plasmic-import: RPnMKWgCkZkYcGGLNc86X/projectcss
import sty from "./PlasmicGreyhoundsUpdate.module.css"; // plasmic-import: DDjcV2BrZr0RU/css

export const PlasmicGreyhoundsUpdate__VariantProps = new Array();

export const PlasmicGreyhoundsUpdate__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicGreyhoundsUpdate__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "romfordVisable",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
      {
        path: "textInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "romfordNewTrackId",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => [
          { "Race Number": "Race 1", ID: "" },
          { "Race Number": "Race 2", ID: "" },
          { "Race Number": "Race 3", ID: "" },
          { "Race Number": "Race 4", ID: "" },
          { "Race Number": "Race 5", ID: "" },
          { "Race Number": "Race 6", ID: "" },
          { "Race Number": "Race 7", ID: "" },
          { "Race Number": "Race 8", ID: "" },
          { "Race Number": "Race 9", ID: "" },
          { "Race Number": "Race 10", ID: "" },
          { "Race Number": "Race 11", ID: "" },
          { "Race Number": "Race 12", ID: "" },
          { "Race Number": "Race 13", ID: "" },
          { "Race Number": "Race 14", ID: "" }
        ]
      },
      {
        path: "romfordData[].raceNumber2",
        type: "private",
        variableType: "text"
      },
      {
        path: "romfordData[].id2",
        type: "private",
        variableType: "number"
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries,
    $refs
  });
  const dataSourcesCtx = usePlasmicDataSourceContext();
  const { cache, mutate: swrMutate } = usePlasmicDataConfig();
  const mutate = swrMutate;
  const new$Queries = {
    query2: usePlasmicDataOp(
      (() => {
        try {
          return {
            sourceId: "vNoYXpnXuGGu6h5PJvBFma",
            opId: "58172cb2-8717-40be-b4f4-03410834153e",
            userArgs: {},
            cacheKey: "plasmic.$.q3Yg8XXWpykYh.$.",
            invalidatedKeys: null,
            roleId: null
          };
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return undefined;
          } else {
            throw e;
          }
        }
      })()
    )
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);
  }
  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          {true ? (
            <section
              data-plasmic-name={"title"}
              data-plasmic-override={overrides.title}
              className={classNames(projectcss.all, sty.title)}
            >
              <div
                data-plasmic-name={"freeBox"}
                data-plasmic-override={overrides.freeBox}
                className={classNames(projectcss.all, sty.freeBox)}
              >
                {true ? (
                  <div
                    data-plasmic-name={"leftSide"}
                    data-plasmic-override={overrides.leftSide}
                    className={classNames(projectcss.all, sty.leftSide)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__a7C
                      )}
                      onClick={async event => {
                        const $steps = {};
                        $steps["goToHomepage"] = true
                          ? (() => {
                              const actionArgs = {
                                destination: __wrapUserFunction(
                                  {
                                    type: "InteractionArgLoc",
                                    actionName: "navigation",
                                    interactionUuid: "QMuYQfJcFVIMO",
                                    componentUuid: "DDjcV2BrZr0RU",
                                    argName: "destination"
                                  },
                                  () => `/`
                                )
                              };
                              return __wrapUserFunction(
                                {
                                  type: "InteractionLoc",
                                  actionName: "navigation",
                                  interactionUuid: "QMuYQfJcFVIMO",
                                  componentUuid: "DDjcV2BrZr0RU"
                                },
                                () =>
                                  (({ destination }) => {
                                    __nextRouter?.push(destination);
                                  })?.apply(null, [actionArgs]),
                                actionArgs
                              );
                            })()
                          : undefined;
                        if (
                          typeof $steps["goToHomepage"] === "object" &&
                          typeof $steps["goToHomepage"].then === "function"
                        ) {
                          $steps["goToHomepage"] = await __wrapUserPromise(
                            {
                              type: "InteractionLoc",
                              actionName: "navigation",
                              interactionUuid: "QMuYQfJcFVIMO",
                              componentUuid: "DDjcV2BrZr0RU"
                            },
                            $steps["goToHomepage"]
                          );
                        }
                      }}
                    >
                      {"Menu"}
                    </div>
                  </div>
                ) : null}
                {true ? (
                  <div
                    data-plasmic-name={"leftSide2"}
                    data-plasmic-override={overrides.leftSide2}
                    className={classNames(projectcss.all, sty.leftSide2)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__eAiCt
                      )}
                    >
                      {"Greyhounds Settings"}
                    </div>
                  </div>
                ) : null}
                {true ? (
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"rightSide"}
                    data-plasmic-override={overrides.rightSide}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.rightSide)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__os5J0
                      )}
                    >
                      <React.Fragment>
                        {(() => {
                          try {
                            return (() => {
                              const now = new Date();
                              let hours = now.getHours();
                              let minutes = now.getMinutes();
                              let ampm = hours >= 12 ? " pm" : " am";
                              hours = hours % 12;
                              hours = hours ? hours : 12;
                              minutes = minutes < 10 ? "0" + minutes : minutes;
                              const time = hours + ":" + minutes + ampm;
                              return time;
                            })();
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return "Title";
                            }
                            throw e;
                          }
                        })()}
                      </React.Fragment>
                    </div>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__cohu
                      )}
                    >
                      <React.Fragment>
                        {(() => {
                          try {
                            return (
                              new Date().toLocaleString("default", {
                                month: "long"
                              }) +
                              " " +
                              (() => {
                                const dayOfMonth = new Date().getDate();
                                let ordinalNumber;
                                if (
                                  dayOfMonth === 1 ||
                                  dayOfMonth === 21 ||
                                  dayOfMonth === 31
                                ) {
                                  ordinalNumber = `${dayOfMonth}st`;
                                } else if (
                                  dayOfMonth === 2 ||
                                  dayOfMonth === 22
                                ) {
                                  ordinalNumber = `${dayOfMonth}nd`;
                                } else if (
                                  dayOfMonth === 3 ||
                                  dayOfMonth === 23
                                ) {
                                  ordinalNumber = `${dayOfMonth}rd`;
                                } else {
                                  ordinalNumber = `${dayOfMonth}th`;
                                }
                                return ordinalNumber;
                              })()
                            );
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return "Title";
                            }
                            throw e;
                          }
                        })()}
                      </React.Fragment>
                    </div>
                  </p.Stack>
                ) : null}
              </div>
            </section>
          ) : null}
          {true ? (
            <p.Stack
              as={"div"}
              data-plasmic-name={"table"}
              data-plasmic-override={overrides.table}
              hasGap={true}
              className={classNames(projectcss.all, sty.table)}
            >
              {true ? (
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"trackName"}
                  data-plasmic-override={overrides.trackName}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.trackName)}
                >
                  {true ? (
                    <div
                      data-plasmic-name={"title2"}
                      data-plasmic-override={overrides.title2}
                      className={classNames(projectcss.all, sty.title2)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__bDwb8
                        )}
                        onClick={async event => {
                          const $steps = {};
                          $steps["updateRomfordVisable"] = true
                            ? (() => {
                                const actionArgs = {
                                  variable: __wrapUserFunction(
                                    {
                                      type: "InteractionArgLoc",
                                      actionName: "updateVariable",
                                      interactionUuid: "JCWGkZ5nnfzG_",
                                      componentUuid: "DDjcV2BrZr0RU",
                                      argName: "variable"
                                    },
                                    () => ({
                                      objRoot: $state,
                                      variablePath: ["romfordVisable"]
                                    })
                                  ),
                                  operation: __wrapUserFunction(
                                    {
                                      type: "InteractionArgLoc",
                                      actionName: "updateVariable",
                                      interactionUuid: "JCWGkZ5nnfzG_",
                                      componentUuid: "DDjcV2BrZr0RU",
                                      argName: "operation"
                                    },
                                    () => 4
                                  )
                                };
                                return __wrapUserFunction(
                                  {
                                    type: "InteractionLoc",
                                    actionName: "updateVariable",
                                    interactionUuid: "JCWGkZ5nnfzG_",
                                    componentUuid: "DDjcV2BrZr0RU"
                                  },
                                  () =>
                                    (({
                                      variable,
                                      value,
                                      startIndex,
                                      deleteCount
                                    }) => {
                                      if (!variable) {
                                        return;
                                      }
                                      const { objRoot, variablePath } =
                                        variable;
                                      const oldValue = p.get(
                                        objRoot,
                                        variablePath
                                      );
                                      p.set(objRoot, variablePath, !oldValue);
                                      return !oldValue;
                                    })?.apply(null, [actionArgs]),
                                  actionArgs
                                );
                              })()
                            : undefined;
                          if (
                            typeof $steps["updateRomfordVisable"] ===
                              "object" &&
                            typeof $steps["updateRomfordVisable"].then ===
                              "function"
                          ) {
                            $steps["updateRomfordVisable"] =
                              await __wrapUserPromise(
                                {
                                  type: "InteractionLoc",
                                  actionName: "updateVariable",
                                  interactionUuid: "JCWGkZ5nnfzG_",
                                  componentUuid: "DDjcV2BrZr0RU"
                                },
                                $steps["updateRomfordVisable"]
                              );
                          }
                        }}
                      >
                        {"Romford"}
                      </div>
                    </div>
                  ) : null}
                </p.Stack>
              ) : null}
              <TextInput
                data-plasmic-name={"textInput"}
                data-plasmic-override={overrides.textInput}
                className={classNames("__wab_instance", sty.textInput)}
                onChange={async (...eventArgs) => {
                  ((...eventArgs) => {
                    p.generateStateOnChangeProp($state, ["textInput", "value"])(
                      (e => e.target?.value).apply(null, eventArgs)
                    );
                  }).apply(null, eventArgs);
                  (async event => {
                    const $steps = {};
                    $steps["airtableUpdateById"] = true
                      ? (() => {
                          const actionArgs = {
                            dataOp: __wrapUserFunction(
                              {
                                type: "InteractionArgLoc",
                                actionName: "dataSourceOp",
                                interactionUuid: "GAK6BuxpaWauu",
                                componentUuid: "DDjcV2BrZr0RU",
                                argName: "dataOp"
                              },
                              () => ({
                                sourceId: "vNoYXpnXuGGu6h5PJvBFma",
                                opId: "9b76dd46-bd75-4d76-b25f-a3fd1799cd17",
                                userArgs: {
                                  variables: [
                                    $state.textInput.value.split("/").pop()
                                  ]
                                },
                                cacheKey: null,
                                invalidatedKeys: ["plasmic_refresh_all"],
                                roleId: null
                              })
                            )
                          };
                          return __wrapUserFunction(
                            {
                              type: "InteractionLoc",
                              actionName: "dataSourceOp",
                              interactionUuid: "GAK6BuxpaWauu",
                              componentUuid: "DDjcV2BrZr0RU"
                            },
                            () =>
                              (async ({ dataOp, continueOnError }) => {
                                try {
                                  const response = await executePlasmicDataOp(
                                    dataOp,
                                    {
                                      userAuthToken:
                                        dataSourcesCtx?.userAuthToken,
                                      user: dataSourcesCtx?.user
                                    }
                                  );
                                  if (
                                    dataOp.invalidatedKeys &&
                                    dataOp.invalidatedKeys.find(
                                      key => key === "plasmic_refresh_all"
                                    )
                                  ) {
                                    await Promise.all(
                                      Array.from(cache.keys()).map(async key =>
                                        mutate(key)
                                      )
                                    );
                                    return response;
                                  }
                                  if (dataOp.invalidatedKeys) {
                                    await Promise.all(
                                      dataOp.invalidatedKeys.map(
                                        async invalidateKey =>
                                          Promise.all(
                                            Array.from(cache.keys()).map(
                                              async key => {
                                                if (
                                                  typeof key === "string" &&
                                                  key.includes(
                                                    `.$.${invalidateKey}.$.`
                                                  )
                                                ) {
                                                  return mutate(key);
                                                }
                                                return Promise.resolve();
                                              }
                                            )
                                          )
                                      )
                                    );
                                  }
                                  return response;
                                } catch (e) {
                                  if (!continueOnError) {
                                    throw e;
                                  }
                                  return e;
                                }
                              })?.apply(null, [actionArgs]),
                            actionArgs
                          );
                        })()
                      : undefined;
                    if (
                      typeof $steps["airtableUpdateById"] === "object" &&
                      typeof $steps["airtableUpdateById"].then === "function"
                    ) {
                      $steps["airtableUpdateById"] = await __wrapUserPromise(
                        {
                          type: "InteractionLoc",
                          actionName: "dataSourceOp",
                          interactionUuid: "GAK6BuxpaWauu",
                          componentUuid: "DDjcV2BrZr0RU"
                        },
                        $steps["airtableUpdateById"]
                      );
                    }
                  }).apply(null, eventArgs);
                }}
                placeholder={"Please enter the first URL..."}
                value={
                  p.generateStateValueProp($state, ["textInput", "value"]) ?? ""
                }
              />

              {(() => {
                try {
                  return $state.romfordVisable === true;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return true;
                  }
                  throw e;
                }
              })()
                ? (
                    (() => {
                      try {
                        return $queries.query2.data;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return [];
                        }
                        throw e;
                      }
                    })() ?? []
                  ).map((currentItem, currentIndex) =>
                    (() => {
                      const child$Props = {
                        className: classNames(
                          "__wab_instance",
                          sty.romfordData
                        ),
                        id2: p.generateStateValueProp($state, [
                          "romfordData",
                          currentIndex,
                          "id2"
                        ]),
                        key: currentIndex,
                        onId2Change: p.generateStateOnChangeProp($state, [
                          "romfordData",
                          currentIndex,
                          "id2"
                        ]),
                        onRaceNumber2Change: p.generateStateOnChangeProp(
                          $state,
                          ["romfordData", currentIndex, "raceNumber2"]
                        ),
                        raceNumber2: p.generateStateValueProp($state, [
                          "romfordData",
                          currentIndex,
                          "raceNumber2"
                        ])
                      };
                      p.initializePlasmicStates(
                        $state,
                        [
                          {
                            name: "romfordData[].raceNumber2",
                            initFunc: ({ $props, $state, $queries }) =>
                              (() => {
                                try {
                                  return currentItem.Race;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return undefined;
                                  }
                                  throw e;
                                }
                              })()
                          },
                          {
                            name: "romfordData[].id2",
                            initFunc: ({ $props, $state, $queries }) =>
                              (() => {
                                try {
                                  return (
                                    Number($queries.query2.data[0].ID) +
                                    currentIndex
                                  );
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return undefined;
                                  }
                                  throw e;
                                }
                              })()
                          }
                        ],

                        [currentIndex]
                      );
                      return (
                        <RomfordData
                          data-plasmic-name={"romfordData"}
                          data-plasmic-override={overrides.romfordData}
                          {...child$Props}
                        />
                      );
                    })()
                  )
                : null}
            </p.Stack>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "title",
    "freeBox",
    "leftSide",
    "leftSide2",
    "rightSide",
    "table",
    "trackName",
    "title2",
    "textInput",
    "romfordData"
  ],

  title: ["title", "freeBox", "leftSide", "leftSide2", "rightSide"],
  freeBox: ["freeBox", "leftSide", "leftSide2", "rightSide"],
  leftSide: ["leftSide"],
  leftSide2: ["leftSide2"],
  rightSide: ["rightSide"],
  table: ["table", "trackName", "title2", "textInput", "romfordData"],
  trackName: ["trackName", "title2"],
  title2: ["title2"],
  textInput: ["textInput"],
  romfordData: ["romfordData"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicGreyhoundsUpdate__ArgProps,
          internalVariantPropNames: PlasmicGreyhoundsUpdate__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicGreyhoundsUpdate__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicGreyhoundsUpdate";
  } else {
    func.displayName = `PlasmicGreyhoundsUpdate.${nodeName}`;
  }
  return func;
}

export const PlasmicGreyhoundsUpdate = Object.assign(
  // Top-level PlasmicGreyhoundsUpdate renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    title: makeNodeComponent("title"),
    freeBox: makeNodeComponent("freeBox"),
    leftSide: makeNodeComponent("leftSide"),
    leftSide2: makeNodeComponent("leftSide2"),
    rightSide: makeNodeComponent("rightSide"),
    table: makeNodeComponent("table"),
    trackName: makeNodeComponent("trackName"),
    title2: makeNodeComponent("title2"),
    textInput: makeNodeComponent("textInput"),
    romfordData: makeNodeComponent("romfordData"),
    // Metadata about props expected for PlasmicGreyhoundsUpdate
    internalVariantProps: PlasmicGreyhoundsUpdate__VariantProps,
    internalArgProps: PlasmicGreyhoundsUpdate__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicGreyhoundsUpdate;
/* prettier-ignore-end */