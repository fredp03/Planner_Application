// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: RPnMKWgCkZkYcGGLNc86X
// Component: CgE6xonf7o8R4m
import * as React from "react";
import { useRouter } from "next/router";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_copy_of_best_main_a_pp.module.css"; // plasmic-import: RPnMKWgCkZkYcGGLNc86X/projectcss
import sty from "./PlasmicDataValue.module.css"; // plasmic-import: CgE6xonf7o8R4m/css

export const PlasmicDataValue__VariantProps = new Array("onDataClick");

export const PlasmicDataValue__ArgProps = new Array(
  "getData",
  "dataValue",
  "onOnDataClickChange",
  "onBold"
);

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

function PlasmicDataValue__RenderFunc(props) {
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
        path: "onDataClick",
        type: "writable",
        variableType: "variant",
        valueProp: "onDataClick",
        onChangeProp: "onOnDataClickChange"
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
  return true ? (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.__wab_text,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootonDataClick]: hasVariant(
            $state,
            "onDataClick",
            "onDataClick"
          )
        }
      )}
      onClick={async event => {
        const $steps = {};
        $steps["updateOnDataClick"] = true
          ? (() => {
              const actionArgs = {
                vgroup: __wrapUserFunction(
                  {
                    type: "InteractionArgLoc",
                    actionName: "updateVariant",
                    interactionUuid: "PVqqzDCxTnPfKB",
                    componentUuid: "CgE6xonf7o8R4m",
                    argName: "vgroup"
                  },
                  () => "onDataClick"
                ),
                operation: __wrapUserFunction(
                  {
                    type: "InteractionArgLoc",
                    actionName: "updateVariant",
                    interactionUuid: "PVqqzDCxTnPfKB",
                    componentUuid: "CgE6xonf7o8R4m",
                    argName: "operation"
                  },
                  () => 2
                )
              };
              return __wrapUserFunction(
                {
                  type: "InteractionLoc",
                  actionName: "updateVariant",
                  interactionUuid: "PVqqzDCxTnPfKB",
                  componentUuid: "CgE6xonf7o8R4m"
                },
                () =>
                  (({ vgroup, value }) => {
                    if (typeof value === "string") {
                      value = [value];
                    }
                    const oldValue = p.get($state, vgroup);
                    p.set($state, vgroup, !oldValue);
                    return !oldValue;
                  })?.apply(null, [actionArgs]),
                actionArgs
              );
            })()
          : undefined;
        if (
          typeof $steps["updateOnDataClick"] === "object" &&
          typeof $steps["updateOnDataClick"].then === "function"
        ) {
          $steps["updateOnDataClick"] = await __wrapUserPromise(
            {
              type: "InteractionLoc",
              actionName: "updateVariant",
              interactionUuid: "PVqqzDCxTnPfKB",
              componentUuid: "CgE6xonf7o8R4m"
            },
            $steps["updateOnDataClick"]
          );
        }
      }}
    >
      <React.Fragment>
        {(() => {
          try {
            return $props.dataValue || "Data Value";
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return "Time";
            }
            throw e;
          }
        })()}
      </React.Fragment>
    </div>
  ) : null;
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicDataValue__ArgProps,
          internalVariantPropNames: PlasmicDataValue__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDataValue__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDataValue";
  } else {
    func.displayName = `PlasmicDataValue.${nodeName}`;
  }
  return func;
}

export const PlasmicDataValue = Object.assign(
  // Top-level PlasmicDataValue renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicDataValue
    internalVariantProps: PlasmicDataValue__VariantProps,
    internalArgProps: PlasmicDataValue__ArgProps
  }
);

export default PlasmicDataValue;
/* prettier-ignore-end */