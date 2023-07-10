// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: RPnMKWgCkZkYcGGLNc86X
// Component: bntqLBXoTFWXnO
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
import sty from "./PlasmicExampleTrapNameSelector.module.css"; // plasmic-import: bntqLBXoTFWXnO/css

export const PlasmicExampleTrapNameSelector__VariantProps = new Array(
  "selected"
);

export const PlasmicExampleTrapNameSelector__ArgProps = new Array(
  "raceNameValue",
  "selectedRaceNumber",
  "onSelectedChange",
  "onChangeTab"
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

function PlasmicExampleTrapNameSelector__RenderFunc(props) {
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
        path: "selected",
        type: "writable",
        variableType: "variant",
        valueProp: "selected",
        onChangeProp: "onSelectedChange"
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
        { [sty.rootselected]: hasVariant($state, "selected", "selected") }
      )}
      onClick={args.onChangeTab}
    >
      <React.Fragment>
        {(() => {
          try {
            return $props.raceNameValue || "Race x";
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return "Example Race Name";
            }
            throw e;
          }
        })()}
      </React.Fragment>
    </div>
  );
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
          internalArgPropNames: PlasmicExampleTrapNameSelector__ArgProps,
          internalVariantPropNames: PlasmicExampleTrapNameSelector__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicExampleTrapNameSelector__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicExampleTrapNameSelector";
  } else {
    func.displayName = `PlasmicExampleTrapNameSelector.${nodeName}`;
  }
  return func;
}

export const PlasmicExampleTrapNameSelector = Object.assign(
  // Top-level PlasmicExampleTrapNameSelector renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicExampleTrapNameSelector
    internalVariantProps: PlasmicExampleTrapNameSelector__VariantProps,
    internalArgProps: PlasmicExampleTrapNameSelector__ArgProps
  }
);

export default PlasmicExampleTrapNameSelector;
/* prettier-ignore-end */
