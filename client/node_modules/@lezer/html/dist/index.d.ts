import {LRParser} from "@lezer/lr"
import {Input, PartialParse, Parser, TreeCursor, ParseWrapper} from "@lezer/common"

export const parser: LRParser

export function configureNesting(tags: readonly {
  tag: "script" | "style" | "textarea",
  attrs?: (attrs: {[attr: string]: string}) => boolean,
  parser: Parser
}[]): ParseWrapper
