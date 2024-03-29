// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: RPnMKWgCkZkYcGGLNc86X
// Component: x86gPPwMMAWfLQ
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_copy_of_best_main_a_pp.module.css"; // plasmic-import: RPnMKWgCkZkYcGGLNc86X/projectcss
import sty from "./PlasmicNewPage.module.css"; // plasmic-import: x86gPPwMMAWfLQ/css

export const PlasmicNewPage__VariantProps = new Array();

export const PlasmicNewPage__ArgProps = new Array();

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

function PlasmicNewPage__RenderFunc(props) {
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
        path: "sectionalTIme",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => [
          { "Trap 1": 4.6 },
          { "Trap 2": 4.9 },
          { "Trap 3": 5.1 }
        ]
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
            <p.Stack
              as={"div"}
              data-plasmic-name={"allProgressBars"}
              data-plasmic-override={overrides.allProgressBars}
              hasGap={true}
              className={classNames(projectcss.all, sty.allProgressBars)}
            >
              {true
                ? (
                    (() => {
                      try {
                        return $state.sectionalTIme;
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
                  ).map((currentItem, currentIndex) => (
                    <div
                      data-plasmic-name={"progressBar"}
                      data-plasmic-override={overrides.progressBar}
                      aria-valuemax={0.5}
                      className={classNames(projectcss.all, sty.progressBar)}
                      key={currentIndex}
                    >
                      <div
                        data-plasmic-name={"progressBarOuter"}
                        data-plasmic-override={overrides.progressBarOuter}
                        className={classNames(
                          projectcss.all,
                          sty.progressBarOuter
                        )}
                      >
                        <div
                          data-plasmic-name={"progressBarOuter2"}
                          data-plasmic-override={overrides.progressBarOuter2}
                          aria-setsize={50}
                          className={classNames(
                            projectcss.all,
                            sty.progressBarOuter2
                          )}
                        />
                      </div>
                    </div>
                  ))
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
    "allProgressBars",
    "progressBar",
    "progressBarOuter",
    "progressBarOuter2"
  ],

  allProgressBars: [
    "allProgressBars",
    "progressBar",
    "progressBarOuter",
    "progressBarOuter2"
  ],

  progressBar: ["progressBar", "progressBarOuter", "progressBarOuter2"],
  progressBarOuter: ["progressBarOuter", "progressBarOuter2"],
  progressBarOuter2: ["progressBarOuter2"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicNewPage__ArgProps,
          internalVariantPropNames: PlasmicNewPage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNewPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNewPage";
  } else {
    func.displayName = `PlasmicNewPage.${nodeName}`;
  }
  return func;
}

export const PlasmicNewPage = Object.assign(
  // Top-level PlasmicNewPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    allProgressBars: makeNodeComponent("allProgressBars"),
    progressBar: makeNodeComponent("progressBar"),
    progressBarOuter: makeNodeComponent("progressBarOuter"),
    progressBarOuter2: makeNodeComponent("progressBarOuter2"),
    // Metadata about props expected for PlasmicNewPage
    internalVariantProps: PlasmicNewPage__VariantProps,
    internalArgProps: PlasmicNewPage__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicNewPage;
/* prettier-ignore-end */
