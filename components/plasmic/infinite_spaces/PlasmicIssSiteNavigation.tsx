// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: swQEFyb2rqeDN7eGYC4o6Y
// Component: OLi-exGuSXba

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { NavigationBar } from "@plasmicpkgs/plasmic-nav";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: swQEFyb2rqeDN7eGYC4o6Y/projectcss
import sty from "./PlasmicIssSiteNavigation.module.css"; // plasmic-import: OLi-exGuSXba/css

createPlasmicElementProxy;

export type PlasmicIssSiteNavigation__VariantMembers = {};
export type PlasmicIssSiteNavigation__VariantsArgs = {};
type VariantPropType = keyof PlasmicIssSiteNavigation__VariantsArgs;
export const PlasmicIssSiteNavigation__VariantProps =
  new Array<VariantPropType>();

export type PlasmicIssSiteNavigation__ArgsType = {};
type ArgPropType = keyof PlasmicIssSiteNavigation__ArgsType;
export const PlasmicIssSiteNavigation__ArgProps = new Array<ArgPropType>();

export type PlasmicIssSiteNavigation__OverridesType = {
  root?: Flex__<typeof NavigationBar>;
};

export interface DefaultIssSiteNavigationProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicIssSiteNavigation__RenderFunc(props: {
  variants: PlasmicIssSiteNavigation__VariantsArgs;
  args: PlasmicIssSiteNavigation__ArgsType;
  overrides: PlasmicIssSiteNavigation__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  return (
    <NavigationBar
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      brand={
        <PlasmicLink__
          className={classNames(projectcss.all, projectcss.a, sty.link___4RT03)}
          component={Link}
          href={"#"}
          onClick={async event => {
            const $steps = {};

            $steps["goToHomepage"] = true
              ? (() => {
                  const actionArgs = { destination: `/` };
                  return (({ destination }) => {
                    if (
                      typeof destination === "string" &&
                      destination.startsWith("#")
                    ) {
                      document
                        .getElementById(destination.substr(1))
                        .scrollIntoView({ behavior: "smooth" });
                    } else {
                      __nextRouter?.push(destination);
                    }
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["goToHomepage"] != null &&
              typeof $steps["goToHomepage"] === "object" &&
              typeof $steps["goToHomepage"].then === "function"
            ) {
              $steps["goToHomepage"] = await $steps["goToHomepage"];
            }
          }}
          platform={"nextjs"}
        >
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__zPYa)}
            displayHeight={"100px"}
            displayMaxHeight={"none"}
            displayMaxWidth={"none"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            src={{
              src: "/plasmic/infinite_spaces/images/centerSoftlightWarmTransparent15Xwebp.webp",
              fullWidth: 1500,
              fullHeight: 1500,
              aspectRatio: undefined
            }}
          />
        </PlasmicLink__>
      }
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root
      )}
      closeButton={
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__ewM5Y)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"none"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          src={"https://static1.plasmic.app/close.svg"}
        />
      }
      itemsGap={8}
      menuItems={
        <React.Fragment>
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link___8M5Mi
            )}
            component={Link}
            href={"/"}
            platform={"nextjs"}
          >
            {"Home"}
          </PlasmicLink__>
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__aBkS5
            )}
            component={Link}
            href={`/events`}
            platform={"nextjs"}
          >
            {"Events"}
          </PlasmicLink__>
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__eWQcE
            )}
            component={Link}
            href={`/contact`}
            platform={"nextjs"}
          >
            {"Contact"}
          </PlasmicLink__>
        </React.Fragment>
      }
      openButton={
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__gGqZb)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"none"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          src={{
            src: "/plasmic/infinite_spaces/images/hamburgersvg.svg",
            fullWidth: 150,
            fullHeight: 150,
            aspectRatio: 1
          }}
        />
      }
      responsiveBreakpoint={768}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: typeof NavigationBar;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicIssSiteNavigation__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicIssSiteNavigation__VariantsArgs;
    args?: PlasmicIssSiteNavigation__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicIssSiteNavigation__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicIssSiteNavigation__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicIssSiteNavigation__ArgProps,
          internalVariantPropNames: PlasmicIssSiteNavigation__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicIssSiteNavigation__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicIssSiteNavigation";
  } else {
    func.displayName = `PlasmicIssSiteNavigation.${nodeName}`;
  }
  return func;
}

export const PlasmicIssSiteNavigation = Object.assign(
  // Top-level PlasmicIssSiteNavigation renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicIssSiteNavigation
    internalVariantProps: PlasmicIssSiteNavigation__VariantProps,
    internalArgProps: PlasmicIssSiteNavigation__ArgProps
  }
);

export default PlasmicIssSiteNavigation;
/* prettier-ignore-end */