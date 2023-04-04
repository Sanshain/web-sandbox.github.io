interface StandardLonghandProperties<TLength = (string & {}) | 0, TTime = string & {}> {
  accentColor?: Property.AccentColor | undefined;
  alignContent?: Property.AlignContent | undefined;
  alignItems?: Property.AlignItems | undefined;
  alignSelf?: Property.AlignSelf | undefined;
  alignTracks?: Property.AlignTracks | undefined;
  animationComposition?: Property.AnimationComposition | undefined;
  animationDelay?: Property.AnimationDelay<TTime> | undefined;
  animationDirection?: Property.AnimationDirection | undefined;
  animationDuration?: Property.AnimationDuration<TTime> | undefined;
  animationFillMode?: Property.AnimationFillMode | undefined;
  animationIterationCount?: Property.AnimationIterationCount | undefined;
  animationName?: Property.AnimationName | undefined;
  animationPlayState?: Property.AnimationPlayState | undefined;
  animationTimeline?: Property.AnimationTimeline | undefined;
  animationTimingFunction?: Property.AnimationTimingFunction | undefined;
  appearance?: Property.Appearance | undefined;
  aspectRatio?: Property.AspectRatio | undefined;
  backdropFilter?: Property.BackdropFilter | undefined;
  backfaceVisibility?: Property.BackfaceVisibility | undefined;
  backgroundAttachment?: Property.BackgroundAttachment | undefined;
  backgroundBlendMode?: Property.BackgroundBlendMode | undefined;
  backgroundClip?: Property.BackgroundClip | undefined;
  backgroundColor?: Property.BackgroundColor | undefined;
  backgroundImage?: Property.BackgroundImage | undefined;
  backgroundOrigin?: Property.BackgroundOrigin | undefined;
  backgroundPositionX?: Property.BackgroundPositionX<TLength> | undefined;
  backgroundPositionY?: Property.BackgroundPositionY<TLength> | undefined;
  backgroundRepeat?: Property.BackgroundRepeat | undefined;
  backgroundSize?: Property.BackgroundSize<TLength> | undefined;
  blockOverflow?: Property.BlockOverflow | undefined;
  blockSize?: Property.BlockSize<TLength> | undefined;
  borderBlockColor?: Property.BorderBlockColor | undefined;
  borderBlockEndColor?: Property.BorderBlockEndColor | undefined;
  borderBlockEndStyle?: Property.BorderBlockEndStyle | undefined;
  borderBlockEndWidth?: Property.BorderBlockEndWidth<TLength> | undefined;
  borderBlockStartColor?: Property.BorderBlockStartColor | undefined;
  borderBlockStartStyle?: Property.BorderBlockStartStyle | undefined;
  borderBlockStartWidth?: Property.BorderBlockStartWidth<TLength> | undefined;
  borderBlockStyle?: Property.BorderBlockStyle | undefined;
  borderBlockWidth?: Property.BorderBlockWidth<TLength> | undefined;
  borderBottomColor?: Property.BorderBottomColor | undefined;
  borderBottomLeftRadius?: Property.BorderBottomLeftRadius<TLength> | undefined;
  borderBottomRightRadius?: Property.BorderBottomRightRadius<TLength> | undefined;
  borderBottomStyle?: Property.BorderBottomStyle | undefined;
  borderBottomWidth?: Property.BorderBottomWidth<TLength> | undefined;
  borderCollapse?: Property.BorderCollapse | undefined;
  borderEndEndRadius?: Property.BorderEndEndRadius<TLength> | undefined;
  borderEndStartRadius?: Property.BorderEndStartRadius<TLength> | undefined;
  borderImageOutset?: Property.BorderImageOutset<TLength> | undefined;
  borderImageRepeat?: Property.BorderImageRepeat | undefined;
  borderImageSlice?: Property.BorderImageSlice | undefined;
  borderImageSource?: Property.BorderImageSource | undefined;
  borderImageWidth?: Property.BorderImageWidth<TLength> | undefined;
  borderInlineColor?: Property.BorderInlineColor | undefined;
  borderInlineEndColor?: Property.BorderInlineEndColor | undefined;
  borderInlineEndStyle?: Property.BorderInlineEndStyle | undefined;
  borderInlineEndWidth?: Property.BorderInlineEndWidth<TLength> | undefined;
  borderInlineStartColor?: Property.BorderInlineStartColor | undefined;
  borderInlineStartStyle?: Property.BorderInlineStartStyle | undefined;
  borderInlineStartWidth?: Property.BorderInlineStartWidth<TLength> | undefined;
  borderInlineStyle?: Property.BorderInlineStyle | undefined;
  borderInlineWidth?: Property.BorderInlineWidth<TLength> | undefined;
  borderLeftColor?: Property.BorderLeftColor | undefined;
  borderLeftStyle?: Property.BorderLeftStyle | undefined;
  borderLeftWidth?: Property.BorderLeftWidth<TLength> | undefined;
  borderRightColor?: Property.BorderRightColor | undefined;
  borderRightStyle?: Property.BorderRightStyle | undefined;
  borderRightWidth?: Property.BorderRightWidth<TLength> | undefined;
  borderSpacing?: Property.BorderSpacing<TLength> | undefined;
  borderStartEndRadius?: Property.BorderStartEndRadius<TLength> | undefined;
  borderStartStartRadius?: Property.BorderStartStartRadius<TLength> | undefined;
  borderTopColor?: Property.BorderTopColor | undefined;
  borderTopLeftRadius?: Property.BorderTopLeftRadius<TLength> | undefined;
  borderTopRightRadius?: Property.BorderTopRightRadius<TLength> | undefined;
  borderTopStyle?: Property.BorderTopStyle | undefined;
  borderTopWidth?: Property.BorderTopWidth<TLength> | undefined;
  bottom?: Property.Bottom<TLength> | undefined;
  boxDecorationBreak?: Property.BoxDecorationBreak | undefined;
  boxShadow?: Property.BoxShadow | undefined;
  boxSizing?: Property.BoxSizing | undefined;
  breakAfter?: Property.BreakAfter | undefined;
  breakBefore?: Property.BreakBefore | undefined;
  breakInside?: Property.BreakInside | undefined;
  captionSide?: Property.CaptionSide | undefined;
  caretColor?: Property.CaretColor | undefined;
  clear?: Property.Clear | undefined;
  clipPath?: Property.ClipPath | undefined;
  color?: Property.Color | undefined;
  colorAdjust?: Property.PrintColorAdjust | undefined;
  colorScheme?: Property.ColorScheme | undefined;
  columnCount?: Property.ColumnCount | undefined;
  columnFill?: Property.ColumnFill | undefined;
  columnGap?: Property.ColumnGap<TLength> | undefined;
  columnRuleColor?: Property.ColumnRuleColor | undefined;
  columnRuleStyle?: Property.ColumnRuleStyle | undefined;
  columnRuleWidth?: Property.ColumnRuleWidth<TLength> | undefined;
  columnSpan?: Property.ColumnSpan | undefined;
  columnWidth?: Property.ColumnWidth<TLength> | undefined;
  contain?: Property.Contain | undefined;
  content?: Property.Content | undefined;
  contentVisibility?: Property.ContentVisibility | undefined;
  counterIncrement?: Property.CounterIncrement | undefined;
  counterReset?: Property.CounterReset | undefined;
  counterSet?: Property.CounterSet | undefined;
  cursor?: Property.Cursor | undefined;
  direction?: Property.Direction | undefined;
  display?: Property.Display | undefined;
  emptyCells?: Property.EmptyCells | undefined;
  filter?: Property.Filter | undefined;
  flexBasis?: Property.FlexBasis<TLength> | undefined;
  flexDirection?: Property.FlexDirection | undefined;
  flexGrow?: Property.FlexGrow | undefined;
  flexShrink?: Property.FlexShrink | undefined;
  flexWrap?: Property.FlexWrap | undefined;
  float?: Property.Float | undefined;
  fontFamily?: Property.FontFamily | undefined;
  fontFeatureSettings?: Property.FontFeatureSettings | undefined;
  fontKerning?: Property.FontKerning | undefined;
  fontLanguageOverride?: Property.FontLanguageOverride | undefined;
  fontOpticalSizing?: Property.FontOpticalSizing | undefined;
  fontSize?: Property.FontSize<TLength> | undefined;
  fontSizeAdjust?: Property.FontSizeAdjust | undefined;
  fontSmooth?: Property.FontSmooth<TLength> | undefined;
  fontStretch?: Property.FontStretch | undefined;
  fontStyle?: Property.FontStyle | undefined;
  fontSynthesis?: Property.FontSynthesis | undefined;
  fontVariant?: Property.FontVariant | undefined;
  fontVariantAlternates?: Property.FontVariantAlternates | undefined;
  fontVariantCaps?: Property.FontVariantCaps | undefined;
  fontVariantEastAsian?: Property.FontVariantEastAsian | undefined;
  fontVariantLigatures?: Property.FontVariantLigatures | undefined;
  fontVariantNumeric?: Property.FontVariantNumeric | undefined;
  fontVariantPosition?: Property.FontVariantPosition | undefined;
  fontVariationSettings?: Property.FontVariationSettings | undefined;
  fontWeight?: Property.FontWeight | undefined;
  forcedColorAdjust?: Property.ForcedColorAdjust | undefined;
  gridAutoColumns?: Property.GridAutoColumns<TLength> | undefined;
  gridAutoFlow?: Property.GridAutoFlow | undefined;
  gridAutoRows?: Property.GridAutoRows<TLength> | undefined;
  gridColumnEnd?: Property.GridColumnEnd | undefined;
  gridColumnStart?: Property.GridColumnStart | undefined;
  gridRowEnd?: Property.GridRowEnd | undefined;
  gridRowStart?: Property.GridRowStart | undefined;
  gridTemplateAreas?: Property.GridTemplateAreas | undefined;
  gridTemplateColumns?: Property.GridTemplateColumns<TLength> | undefined;
  gridTemplateRows?: Property.GridTemplateRows<TLength> | undefined;
  hangingPunctuation?: Property.HangingPunctuation | undefined;
  height?: Property.Height<TLength> | undefined;
  hyphenateCharacter?: Property.HyphenateCharacter | undefined;
  hyphens?: Property.Hyphens | undefined;
  imageOrientation?: Property.ImageOrientation | undefined;
  imageRendering?: Property.ImageRendering | undefined;
  imageResolution?: Property.ImageResolution | undefined;
  initialLetter?: Property.InitialLetter | undefined;
  inlineSize?: Property.InlineSize<TLength> | undefined;
  inputSecurity?: Property.InputSecurity | undefined;
  inset?: Property.Inset<TLength> | undefined;
  insetBlock?: Property.InsetBlock<TLength> | undefined;
  insetBlockEnd?: Property.InsetBlockEnd<TLength> | undefined;
  insetBlockStart?: Property.InsetBlockStart<TLength> | undefined;
  insetInline?: Property.InsetInline<TLength> | undefined;
  insetInlineEnd?: Property.InsetInlineEnd<TLength> | undefined;
  insetInlineStart?: Property.InsetInlineStart<TLength> | undefined;
  isolation?: Property.Isolation | undefined;
  justifyContent?: Property.JustifyContent | undefined;
  justifyItems?: Property.JustifyItems | undefined;
  justifySelf?: Property.JustifySelf | undefined;
  justifyTracks?: Property.JustifyTracks | undefined;
  left?: Property.Left<TLength> | undefined;
  letterSpacing?: Property.LetterSpacing<TLength> | undefined;
  lineBreak?: Property.LineBreak | undefined;
  lineHeight?: Property.LineHeight<TLength> | undefined;
  lineHeightStep?: Property.LineHeightStep<TLength> | undefined;
  listStyleImage?: Property.ListStyleImage | undefined;
  listStylePosition?: Property.ListStylePosition | undefined;
  listStyleType?: Property.ListStyleType | undefined;
  marginBlock?: Property.MarginBlock<TLength> | undefined;
  marginBlockEnd?: Property.MarginBlockEnd<TLength> | undefined;
  marginBlockStart?: Property.MarginBlockStart<TLength> | undefined;
  marginBottom?: Property.MarginBottom<TLength> | undefined;
  marginInline?: Property.MarginInline<TLength> | undefined;
  marginInlineEnd?: Property.MarginInlineEnd<TLength> | undefined;
  marginInlineStart?: Property.MarginInlineStart<TLength> | undefined;
  marginLeft?: Property.MarginLeft<TLength> | undefined;
  marginRight?: Property.MarginRight<TLength> | undefined;
  marginTop?: Property.MarginTop<TLength> | undefined;
  maskBorderMode?: Property.MaskBorderMode | undefined;
  maskBorderOutset?: Property.MaskBorderOutset<TLength> | undefined;
  maskBorderRepeat?: Property.MaskBorderRepeat | undefined;
  maskBorderSlice?: Property.MaskBorderSlice | undefined;
  maskBorderSource?: Property.MaskBorderSource | undefined;
  maskBorderWidth?: Property.MaskBorderWidth<TLength> | undefined;
  maskClip?: Property.MaskClip | undefined;
  maskComposite?: Property.MaskComposite | undefined;
  maskImage?: Property.MaskImage | undefined;
  maskMode?: Property.MaskMode | undefined;
  maskOrigin?: Property.MaskOrigin | undefined;
  maskPosition?: Property.MaskPosition<TLength> | undefined;
  maskRepeat?: Property.MaskRepeat | undefined;
  maskSize?: Property.MaskSize<TLength> | undefined;
  maskType?: Property.MaskType | undefined;
  mathDepth?: Property.MathDepth | undefined;
  mathShift?: Property.MathShift | undefined;
  mathStyle?: Property.MathStyle | undefined;
  maxBlockSize?: Property.MaxBlockSize<TLength> | undefined;
  maxHeight?: Property.MaxHeight<TLength> | undefined;
  maxInlineSize?: Property.MaxInlineSize<TLength> | undefined;
  maxLines?: Property.MaxLines | undefined;
  maxWidth?: Property.MaxWidth<TLength> | undefined;
  minBlockSize?: Property.MinBlockSize<TLength> | undefined;
  minHeight?: Property.MinHeight<TLength> | undefined;
  minInlineSize?: Property.MinInlineSize<TLength> | undefined;
  minWidth?: Property.MinWidth<TLength> | undefined;
  mixBlendMode?: Property.MixBlendMode | undefined;
  motionDistance?: Property.OffsetDistance<TLength> | undefined;
  motionPath?: Property.OffsetPath | undefined;
  motionRotation?: Property.OffsetRotate | undefined;
  objectFit?: Property.ObjectFit | undefined;
  objectPosition?: Property.ObjectPosition<TLength> | undefined;
  offsetAnchor?: Property.OffsetAnchor<TLength> | undefined;
  offsetDistance?: Property.OffsetDistance<TLength> | undefined;
  offsetPath?: Property.OffsetPath | undefined;
  offsetRotate?: Property.OffsetRotate | undefined;
  offsetRotation?: Property.OffsetRotate | undefined;
  opacity?: Property.Opacity | undefined;
  order?: Property.Order | undefined;
  orphans?: Property.Orphans | undefined;
  outlineColor?: Property.OutlineColor | undefined;
  outlineOffset?: Property.OutlineOffset<TLength> | undefined;
  outlineStyle?: Property.OutlineStyle | undefined;
  outlineWidth?: Property.OutlineWidth<TLength> | undefined;
  overflowAnchor?: Property.OverflowAnchor | undefined;
  overflowBlock?: Property.OverflowBlock | undefined;
  overflowClipBox?: Property.OverflowClipBox | undefined;
  overflowClipMargin?: Property.OverflowClipMargin<TLength> | undefined;
  overflowInline?: Property.OverflowInline | undefined;
  overflowWrap?: Property.OverflowWrap | undefined;
  overflowX?: Property.OverflowX | undefined;
  overflowY?: Property.OverflowY | undefined;
  overscrollBehaviorBlock?: Property.OverscrollBehaviorBlock | undefined;
  overscrollBehaviorInline?: Property.OverscrollBehaviorInline | undefined;
  overscrollBehaviorX?: Property.OverscrollBehaviorX | undefined;
  overscrollBehaviorY?: Property.OverscrollBehaviorY | undefined;
  paddingBlock?: Property.PaddingBlock<TLength> | undefined;
  paddingBlockEnd?: Property.PaddingBlockEnd<TLength> | undefined;
  paddingBlockStart?: Property.PaddingBlockStart<TLength> | undefined;
  paddingBottom?: Property.PaddingBottom<TLength> | undefined;
  paddingInline?: Property.PaddingInline<TLength> | undefined;
  paddingInlineEnd?: Property.PaddingInlineEnd<TLength> | undefined;
  paddingInlineStart?: Property.PaddingInlineStart<TLength> | undefined;
  paddingLeft?: Property.PaddingLeft<TLength> | undefined;
  paddingRight?: Property.PaddingRight<TLength> | undefined;
  paddingTop?: Property.PaddingTop<TLength> | undefined;
  pageBreakAfter?: Property.PageBreakAfter | undefined;
  pageBreakBefore?: Property.PageBreakBefore | undefined;
  pageBreakInside?: Property.PageBreakInside | undefined;
  paintOrder?: Property.PaintOrder | undefined;
  perspective?: Property.Perspective<TLength> | undefined;
  perspectiveOrigin?: Property.PerspectiveOrigin<TLength> | undefined;
  placeContent?: Property.PlaceContent | undefined;
  pointerEvents?: Property.PointerEvents | undefined;
  position?: Property.Position | undefined;
  printColorAdjust?: Property.PrintColorAdjust | undefined;
  quotes?: Property.Quotes | undefined;
  resize?: Property.Resize | undefined;
  right?: Property.Right<TLength> | undefined;
  rotate?: Property.Rotate | undefined;
  rowGap?: Property.RowGap<TLength> | undefined;
  rubyAlign?: Property.RubyAlign | undefined;
  rubyMerge?: Property.RubyMerge | undefined;
  rubyPosition?: Property.RubyPosition | undefined;
  scale?: Property.Scale | undefined;
  scrollBehavior?: Property.ScrollBehavior | undefined;
  scrollMargin?: Property.ScrollMargin<TLength> | undefined;
  scrollMarginBlock?: Property.ScrollMarginBlock<TLength> | undefined;
  scrollMarginBlockEnd?: Property.ScrollMarginBlockEnd<TLength> | undefined;
  scrollMarginBlockStart?: Property.ScrollMarginBlockStart<TLength> | undefined;
  scrollMarginBottom?: Property.ScrollMarginBottom<TLength> | undefined;
  scrollMarginInline?: Property.ScrollMarginInline<TLength> | undefined;
  scrollMarginInlineEnd?: Property.ScrollMarginInlineEnd<TLength> | undefined;
  scrollMarginInlineStart?: Property.ScrollMarginInlineStart<TLength> | undefined;
  scrollMarginLeft?: Property.ScrollMarginLeft<TLength> | undefined;
  scrollMarginRight?: Property.ScrollMarginRight<TLength> | undefined;
  scrollMarginTop?: Property.ScrollMarginTop<TLength> | undefined;
  scrollPadding?: Property.ScrollPadding<TLength> | undefined;
  scrollPaddingBlock?: Property.ScrollPaddingBlock<TLength> | undefined;
  scrollPaddingBlockEnd?: Property.ScrollPaddingBlockEnd<TLength> | undefined;
  scrollPaddingBlockStart?: Property.ScrollPaddingBlockStart<TLength> | undefined;
  scrollPaddingBottom?: Property.ScrollPaddingBottom<TLength> | undefined;
  scrollPaddingInline?: Property.ScrollPaddingInline<TLength> | undefined;
  scrollPaddingInlineEnd?: Property.ScrollPaddingInlineEnd<TLength> | undefined;
  scrollPaddingInlineStart?: Property.ScrollPaddingInlineStart<TLength> | undefined;
  scrollPaddingLeft?: Property.ScrollPaddingLeft<TLength> | undefined;
  scrollPaddingRight?: Property.ScrollPaddingRight<TLength> | undefined;
  scrollPaddingTop?: Property.ScrollPaddingTop<TLength> | undefined;
  scrollSnapAlign?: Property.ScrollSnapAlign | undefined;
  scrollSnapMargin?: Property.ScrollMargin<TLength> | undefined;
  scrollSnapMarginBottom?: Property.ScrollMarginBottom<TLength> | undefined;
  scrollSnapMarginLeft?: Property.ScrollMarginLeft<TLength> | undefined;
  scrollSnapMarginRight?: Property.ScrollMarginRight<TLength> | undefined;
  scrollSnapMarginTop?: Property.ScrollMarginTop<TLength> | undefined;
  scrollSnapStop?: Property.ScrollSnapStop | undefined;
  scrollSnapType?: Property.ScrollSnapType | undefined;
  scrollbarColor?: Property.ScrollbarColor | undefined;
  scrollbarGutter?: Property.ScrollbarGutter | undefined;
  scrollbarWidth?: Property.ScrollbarWidth | undefined;
  shapeImageThreshold?: Property.ShapeImageThreshold | undefined;
  shapeMargin?: Property.ShapeMargin<TLength> | undefined;
  shapeOutside?: Property.ShapeOutside | undefined;
  tabSize?: Property.TabSize<TLength> | undefined;
  tableLayout?: Property.TableLayout | undefined;
  textAlign?: Property.TextAlign | undefined;
  textAlignLast?: Property.TextAlignLast | undefined;
  textCombineUpright?: Property.TextCombineUpright | undefined;
  textDecorationColor?: Property.TextDecorationColor | undefined;
  textDecorationLine?: Property.TextDecorationLine | undefined;
  textDecorationSkip?: Property.TextDecorationSkip | undefined;
  textDecorationSkipInk?: Property.TextDecorationSkipInk | undefined;
  textDecorationStyle?: Property.TextDecorationStyle | undefined;
  textDecorationThickness?: Property.TextDecorationThickness<TLength> | undefined;
  textEmphasisColor?: Property.TextEmphasisColor | undefined;
  textEmphasisPosition?: Property.TextEmphasisPosition | undefined;
  textEmphasisStyle?: Property.TextEmphasisStyle | undefined;
  textIndent?: Property.TextIndent<TLength> | undefined;
  textJustify?: Property.TextJustify | undefined;
  textOrientation?: Property.TextOrientation | undefined;
  textOverflow?: Property.TextOverflow | undefined;
  textRendering?: Property.TextRendering | undefined;
  textShadow?: Property.TextShadow | undefined;
  textSizeAdjust?: Property.TextSizeAdjust | undefined;
  textTransform?: Property.TextTransform | undefined;
  textUnderlineOffset?: Property.TextUnderlineOffset<TLength> | undefined;
  textUnderlinePosition?: Property.TextUnderlinePosition | undefined;
  top?: Property.Top<TLength> | undefined;
  touchAction?: Property.TouchAction | undefined;
  transform?: Property.Transform | undefined;
  transformBox?: Property.TransformBox | undefined;
  transformOrigin?: Property.TransformOrigin<TLength> | undefined;
  transformStyle?: Property.TransformStyle | undefined;
  transitionDelay?: Property.TransitionDelay<TTime> | undefined;
  transitionDuration?: Property.TransitionDuration<TTime> | undefined;
  transitionProperty?: Property.TransitionProperty | undefined;
  transitionTimingFunction?: Property.TransitionTimingFunction | undefined;
  translate?: Property.Translate<TLength> | undefined;
  unicodeBidi?: Property.UnicodeBidi | undefined;
  userSelect?: Property.UserSelect | undefined;
  verticalAlign?: Property.VerticalAlign<TLength> | undefined;
  visibility?: Property.Visibility | undefined;
  whiteSpace?: Property.WhiteSpace | undefined;
  widows?: Property.Widows | undefined;
  width?: Property.Width<TLength> | undefined;
  willChange?: Property.WillChange | undefined;
  wordBreak?: Property.WordBreak | undefined;
  wordSpacing?: Property.WordSpacing<TLength> | undefined;
  wordWrap?: Property.WordWrap | undefined;
  writingMode?: Property.WritingMode | undefined;
  zIndex?: Property.ZIndex | undefined;
  zoom?: Property.Zoom | undefined;
}
interface StandardShorthandProperties<TLength = (string & {}) | 0, TTime = string & {}> {
  all?: Property.All | undefined;
  animation?: Property.Animation<TTime> | undefined;
  background?: Property.Background<TLength> | undefined;
  backgroundPosition?: Property.BackgroundPosition<TLength> | undefined;
  border?: Property.Border<TLength> | undefined;
  borderBlock?: Property.BorderBlock<TLength> | undefined;
  borderBlockEnd?: Property.BorderBlockEnd<TLength> | undefined;
  borderBlockStart?: Property.BorderBlockStart<TLength> | undefined;
  borderBottom?: Property.BorderBottom<TLength> | undefined;
  borderColor?: Property.BorderColor | undefined;
  borderImage?: Property.BorderImage | undefined;
  borderInline?: Property.BorderInline<TLength> | undefined;
  borderInlineEnd?: Property.BorderInlineEnd<TLength> | undefined;
  borderInlineStart?: Property.BorderInlineStart<TLength> | undefined;
  borderLeft?: Property.BorderLeft<TLength> | undefined;
  borderRadius?: Property.BorderRadius<TLength> | undefined;
  borderRight?: Property.BorderRight<TLength> | undefined;
  borderStyle?: Property.BorderStyle | undefined;
  borderTop?: Property.BorderTop<TLength> | undefined;
  borderWidth?: Property.BorderWidth<TLength> | undefined;
  columnRule?: Property.ColumnRule<TLength> | undefined;
  columns?: Property.Columns<TLength> | undefined;
  flex?: Property.Flex<TLength> | undefined;
  flexFlow?: Property.FlexFlow | undefined;
  font?: Property.Font | undefined;
  gap?: Property.Gap<TLength> | undefined;
  grid?: Property.Grid | undefined;
  gridArea?: Property.GridArea | undefined;
  gridColumn?: Property.GridColumn | undefined;
  gridRow?: Property.GridRow | undefined;
  gridTemplate?: Property.GridTemplate | undefined;
  lineClamp?: Property.LineClamp | undefined;
  listStyle?: Property.ListStyle | undefined;
  margin?: Property.Margin<TLength> | undefined;
  mask?: Property.Mask<TLength> | undefined;
  maskBorder?: Property.MaskBorder | undefined;
  motion?: Property.Offset<TLength> | undefined;
  offset?: Property.Offset<TLength> | undefined;
  outline?: Property.Outline<TLength> | undefined;
  overflow?: Property.Overflow | undefined;
  overscrollBehavior?: Property.OverscrollBehavior | undefined;
  padding?: Property.Padding<TLength> | undefined;
  placeItems?: Property.PlaceItems | undefined;
  placeSelf?: Property.PlaceSelf | undefined;
  textDecoration?: Property.TextDecoration<TLength> | undefined;
  textEmphasis?: Property.TextEmphasis | undefined;
  transition?: Property.Transition<TTime> | undefined;
}
interface StandardProperties<TLength = (string & {}) | 0, TTime = string & {}>
  extends StandardLonghandProperties<TLength, TTime>,
    StandardShorthandProperties<TLength, TTime> {}
interface VendorLonghandProperties<TLength = (string & {}) | 0, TTime = string & {}> {
  MozAnimationDelay?: Property.AnimationDelay<TTime> | undefined;
  MozAnimationDirection?: Property.AnimationDirection | undefined;
  MozAnimationDuration?: Property.AnimationDuration<TTime> | undefined;
  MozAnimationFillMode?: Property.AnimationFillMode | undefined;
  MozAnimationIterationCount?: Property.AnimationIterationCount | undefined;
  MozAnimationName?: Property.AnimationName | undefined;
  MozAnimationPlayState?: Property.AnimationPlayState | undefined;
  MozAnimationTimingFunction?: Property.AnimationTimingFunction | undefined;
  MozAppearance?: Property.MozAppearance | undefined;
  MozBackfaceVisibility?: Property.BackfaceVisibility | undefined;
  MozBorderBottomColors?: Property.MozBorderBottomColors | undefined;
  MozBorderEndColor?: Property.BorderInlineEndColor | undefined;
  MozBorderEndStyle?: Property.BorderInlineEndStyle | undefined;
  MozBorderEndWidth?: Property.BorderInlineEndWidth<TLength> | undefined;
  MozBorderLeftColors?: Property.MozBorderLeftColors | undefined;
  MozBorderRightColors?: Property.MozBorderRightColors | undefined;
  MozBorderStartColor?: Property.BorderInlineStartColor | undefined;
  MozBorderStartStyle?: Property.BorderInlineStartStyle | undefined;
  MozBorderTopColors?: Property.MozBorderTopColors | undefined;
  MozBoxSizing?: Property.BoxSizing | undefined;
  MozColumnCount?: Property.ColumnCount | undefined;
  MozColumnFill?: Property.ColumnFill | undefined;
  MozColumnRuleColor?: Property.ColumnRuleColor | undefined;
  MozColumnRuleStyle?: Property.ColumnRuleStyle | undefined;
  MozColumnRuleWidth?: Property.ColumnRuleWidth<TLength> | undefined;
  MozColumnWidth?: Property.ColumnWidth<TLength> | undefined;
  MozContextProperties?: Property.MozContextProperties | undefined;
  MozFontFeatureSettings?: Property.FontFeatureSettings | undefined;
  MozFontLanguageOverride?: Property.FontLanguageOverride | undefined;
  MozHyphens?: Property.Hyphens | undefined;
  MozImageRegion?: Property.MozImageRegion | undefined;
  MozMarginEnd?: Property.MarginInlineEnd<TLength> | undefined;
  MozMarginStart?: Property.MarginInlineStart<TLength> | undefined;
  MozOrient?: Property.MozOrient | undefined;
  MozOsxFontSmoothing?: Property.FontSmooth<TLength> | undefined;
  MozPaddingEnd?: Property.PaddingInlineEnd<TLength> | undefined;
  MozPaddingStart?: Property.PaddingInlineStart<TLength> | undefined;
  MozPerspective?: Property.Perspective<TLength> | undefined;
  MozPerspectiveOrigin?: Property.PerspectiveOrigin<TLength> | undefined;
  MozStackSizing?: Property.MozStackSizing | undefined;
  MozTabSize?: Property.TabSize<TLength> | undefined;
  MozTextBlink?: Property.MozTextBlink | undefined;
  MozTextSizeAdjust?: Property.TextSizeAdjust | undefined;
  MozTransformOrigin?: Property.TransformOrigin<TLength> | undefined;
  MozTransformStyle?: Property.TransformStyle | undefined;
  MozTransitionDelay?: Property.TransitionDelay<TTime> | undefined;
  MozTransitionDuration?: Property.TransitionDuration<TTime> | undefined;
  MozTransitionProperty?: Property.TransitionProperty | undefined;
  MozTransitionTimingFunction?: Property.TransitionTimingFunction | undefined;
  MozUserFocus?: Property.MozUserFocus | undefined;
  MozUserModify?: Property.MozUserModify | undefined;
  MozUserSelect?: Property.UserSelect | undefined;
  MozWindowDragging?: Property.MozWindowDragging | undefined;
  MozWindowShadow?: Property.MozWindowShadow | undefined;
  msAccelerator?: Property.MsAccelerator | undefined;
  msBlockProgression?: Property.MsBlockProgression | undefined;
  msContentZoomChaining?: Property.MsContentZoomChaining | undefined;
  msContentZoomLimitMax?: Property.MsContentZoomLimitMax | undefined;
  msContentZoomLimitMin?: Property.MsContentZoomLimitMin | undefined;
  msContentZoomSnapPoints?: Property.MsContentZoomSnapPoints | undefined;
  msContentZoomSnapType?: Property.MsContentZoomSnapType | undefined;
  msContentZooming?: Property.MsContentZooming | undefined;
  msFilter?: Property.MsFilter | undefined;
  msFlexDirection?: Property.FlexDirection | undefined;
  msFlexPositive?: Property.FlexGrow | undefined;
  msFlowFrom?: Property.MsFlowFrom | undefined;
  msFlowInto?: Property.MsFlowInto | undefined;
  msGridColumns?: Property.MsGridColumns<TLength> | undefined;
  msGridRows?: Property.MsGridRows<TLength> | undefined;
  msHighContrastAdjust?: Property.MsHighContrastAdjust | undefined;
  msHyphenateLimitChars?: Property.MsHyphenateLimitChars | undefined;
  msHyphenateLimitLines?: Property.MsHyphenateLimitLines | undefined;
  msHyphenateLimitZone?: Property.MsHyphenateLimitZone<TLength> | undefined;
  msHyphens?: Property.Hyphens | undefined;
  msImeAlign?: Property.MsImeAlign | undefined;
  msLineBreak?: Property.LineBreak | undefined;
  msOrder?: Property.Order | undefined;
  msOverflowStyle?: Property.MsOverflowStyle | undefined;
  msOverflowX?: Property.OverflowX | undefined;
  msOverflowY?: Property.OverflowY | undefined;
  msScrollChaining?: Property.MsScrollChaining | undefined;
  msScrollLimitXMax?: Property.MsScrollLimitXMax<TLength> | undefined;
  msScrollLimitXMin?: Property.MsScrollLimitXMin<TLength> | undefined;
  msScrollLimitYMax?: Property.MsScrollLimitYMax<TLength> | undefined;
  msScrollLimitYMin?: Property.MsScrollLimitYMin<TLength> | undefined;
  msScrollRails?: Property.MsScrollRails | undefined;
  msScrollSnapPointsX?: Property.MsScrollSnapPointsX | undefined;
  msScrollSnapPointsY?: Property.MsScrollSnapPointsY | undefined;
  msScrollSnapType?: Property.MsScrollSnapType | undefined;
  msScrollTranslation?: Property.MsScrollTranslation | undefined;
  msScrollbar3dlightColor?: Property.MsScrollbar3dlightColor | undefined;
  msScrollbarArrowColor?: Property.MsScrollbarArrowColor | undefined;
  msScrollbarBaseColor?: Property.MsScrollbarBaseColor | undefined;
  msScrollbarDarkshadowColor?: Property.MsScrollbarDarkshadowColor | undefined;
  msScrollbarFaceColor?: Property.MsScrollbarFaceColor | undefined;
  msScrollbarHighlightColor?: Property.MsScrollbarHighlightColor | undefined;
  msScrollbarShadowColor?: Property.MsScrollbarShadowColor | undefined;
  msScrollbarTrackColor?: Property.MsScrollbarTrackColor | undefined;
  msTextAutospace?: Property.MsTextAutospace | undefined;
  msTextCombineHorizontal?: Property.TextCombineUpright | undefined;
  msTextOverflow?: Property.TextOverflow | undefined;
  msTouchAction?: Property.TouchAction | undefined;
  msTouchSelect?: Property.MsTouchSelect | undefined;
  msTransform?: Property.Transform | undefined;
  msTransformOrigin?: Property.TransformOrigin<TLength> | undefined;
  msTransitionDelay?: Property.TransitionDelay<TTime> | undefined;
  msTransitionDuration?: Property.TransitionDuration<TTime> | undefined;
  msTransitionProperty?: Property.TransitionProperty | undefined;
  msTransitionTimingFunction?: Property.TransitionTimingFunction | undefined;
  msUserSelect?: Property.MsUserSelect | undefined;
  msWordBreak?: Property.WordBreak | undefined;
  msWrapFlow?: Property.MsWrapFlow | undefined;
  msWrapMargin?: Property.MsWrapMargin<TLength> | undefined;
  msWrapThrough?: Property.MsWrapThrough | undefined;
  msWritingMode?: Property.WritingMode | undefined;
  WebkitAlignContent?: Property.AlignContent | undefined;
  WebkitAlignItems?: Property.AlignItems | undefined;
  WebkitAlignSelf?: Property.AlignSelf | undefined;
  WebkitAnimationDelay?: Property.AnimationDelay<TTime> | undefined;
  WebkitAnimationDirection?: Property.AnimationDirection | undefined;
  WebkitAnimationDuration?: Property.AnimationDuration<TTime> | undefined;
  WebkitAnimationFillMode?: Property.AnimationFillMode | undefined;
  WebkitAnimationIterationCount?: Property.AnimationIterationCount | undefined;
  WebkitAnimationName?: Property.AnimationName | undefined;
  WebkitAnimationPlayState?: Property.AnimationPlayState | undefined;
  WebkitAnimationTimingFunction?: Property.AnimationTimingFunction | undefined;
  WebkitAppearance?: Property.WebkitAppearance | undefined;
  WebkitBackdropFilter?: Property.BackdropFilter | undefined;
  WebkitBackfaceVisibility?: Property.BackfaceVisibility | undefined;
  WebkitBackgroundClip?: Property.BackgroundClip | undefined;
  WebkitBackgroundOrigin?: Property.BackgroundOrigin | undefined;
  WebkitBackgroundSize?: Property.BackgroundSize<TLength> | undefined;
  WebkitBorderBeforeColor?: Property.WebkitBorderBeforeColor | undefined;
  WebkitBorderBeforeStyle?: Property.WebkitBorderBeforeStyle | undefined;
  WebkitBorderBeforeWidth?: Property.WebkitBorderBeforeWidth<TLength> | undefined;
  WebkitBorderBottomLeftRadius?: Property.BorderBottomLeftRadius<TLength> | undefined;
  WebkitBorderBottomRightRadius?: Property.BorderBottomRightRadius<TLength> | undefined;
  WebkitBorderImageSlice?: Property.BorderImageSlice | undefined;
  WebkitBorderTopLeftRadius?: Property.BorderTopLeftRadius<TLength> | undefined;
  WebkitBorderTopRightRadius?: Property.BorderTopRightRadius<TLength> | undefined;
  WebkitBoxDecorationBreak?: Property.BoxDecorationBreak | undefined;
  WebkitBoxReflect?: Property.WebkitBoxReflect<TLength> | undefined;
  WebkitBoxShadow?: Property.BoxShadow | undefined;
  WebkitBoxSizing?: Property.BoxSizing | undefined;
  WebkitClipPath?: Property.ClipPath | undefined;
  WebkitColumnCount?: Property.ColumnCount | undefined;
  WebkitColumnFill?: Property.ColumnFill | undefined;
  WebkitColumnRuleColor?: Property.ColumnRuleColor | undefined;
  WebkitColumnRuleStyle?: Property.ColumnRuleStyle | undefined;
  WebkitColumnRuleWidth?: Property.ColumnRuleWidth<TLength> | undefined;
  WebkitColumnSpan?: Property.ColumnSpan | undefined;
  WebkitColumnWidth?: Property.ColumnWidth<TLength> | undefined;
  WebkitFilter?: Property.Filter | undefined;
  WebkitFlexBasis?: Property.FlexBasis<TLength> | undefined;
  WebkitFlexDirection?: Property.FlexDirection | undefined;
  WebkitFlexGrow?: Property.FlexGrow | undefined;
  WebkitFlexShrink?: Property.FlexShrink | undefined;
  WebkitFlexWrap?: Property.FlexWrap | undefined;
  WebkitFontFeatureSettings?: Property.FontFeatureSettings | undefined;
  WebkitFontKerning?: Property.FontKerning | undefined;
  WebkitFontSmoothing?: Property.FontSmooth<TLength> | undefined;
  WebkitFontVariantLigatures?: Property.FontVariantLigatures | undefined;
  WebkitHyphenateCharacter?: Property.HyphenateCharacter | undefined;
  WebkitHyphens?: Property.Hyphens | undefined;
  WebkitInitialLetter?: Property.InitialLetter | undefined;
  WebkitJustifyContent?: Property.JustifyContent | undefined;
  WebkitLineBreak?: Property.LineBreak | undefined;
  WebkitLineClamp?: Property.WebkitLineClamp | undefined;
  WebkitMarginEnd?: Property.MarginInlineEnd<TLength> | undefined;
  WebkitMarginStart?: Property.MarginInlineStart<TLength> | undefined;
  WebkitMaskAttachment?: Property.WebkitMaskAttachment | undefined;
  WebkitMaskBoxImageOutset?: Property.MaskBorderOutset<TLength> | undefined;
  WebkitMaskBoxImageRepeat?: Property.MaskBorderRepeat | undefined;
  WebkitMaskBoxImageSlice?: Property.MaskBorderSlice | undefined;
  WebkitMaskBoxImageSource?: Property.MaskBorderSource | undefined;
  WebkitMaskBoxImageWidth?: Property.MaskBorderWidth<TLength> | undefined;
  WebkitMaskClip?: Property.WebkitMaskClip | undefined;
  WebkitMaskComposite?: Property.WebkitMaskComposite | undefined;
  WebkitMaskImage?: Property.WebkitMaskImage | undefined;
  WebkitMaskOrigin?: Property.WebkitMaskOrigin | undefined;
  WebkitMaskPosition?: Property.WebkitMaskPosition<TLength> | undefined;
  WebkitMaskPositionX?: Property.WebkitMaskPositionX<TLength> | undefined;
  WebkitMaskPositionY?: Property.WebkitMaskPositionY<TLength> | undefined;
  WebkitMaskRepeat?: Property.WebkitMaskRepeat | undefined;
  WebkitMaskRepeatX?: Property.WebkitMaskRepeatX | undefined;
  WebkitMaskRepeatY?: Property.WebkitMaskRepeatY | undefined;
  WebkitMaskSize?: Property.WebkitMaskSize<TLength> | undefined;
  WebkitMaxInlineSize?: Property.MaxInlineSize<TLength> | undefined;
  WebkitOrder?: Property.Order | undefined;
  WebkitOverflowScrolling?: Property.WebkitOverflowScrolling | undefined;
  WebkitPaddingEnd?: Property.PaddingInlineEnd<TLength> | undefined;
  WebkitPaddingStart?: Property.PaddingInlineStart<TLength> | undefined;
  WebkitPerspective?: Property.Perspective<TLength> | undefined;
  WebkitPerspectiveOrigin?: Property.PerspectiveOrigin<TLength> | undefined;
  WebkitPrintColorAdjust?: Property.PrintColorAdjust | undefined;
  WebkitRubyPosition?: Property.RubyPosition | undefined;
  WebkitScrollSnapType?: Property.ScrollSnapType | undefined;
  WebkitShapeMargin?: Property.ShapeMargin<TLength> | undefined;
  WebkitTapHighlightColor?: Property.WebkitTapHighlightColor | undefined;
  WebkitTextCombine?: Property.TextCombineUpright | undefined;
  WebkitTextDecorationColor?: Property.TextDecorationColor | undefined;
  WebkitTextDecorationLine?: Property.TextDecorationLine | undefined;
  WebkitTextDecorationSkip?: Property.TextDecorationSkip | undefined;
  WebkitTextDecorationStyle?: Property.TextDecorationStyle | undefined;
  WebkitTextEmphasisColor?: Property.TextEmphasisColor | undefined;
  WebkitTextEmphasisPosition?: Property.TextEmphasisPosition | undefined;
  WebkitTextEmphasisStyle?: Property.TextEmphasisStyle | undefined;
  WebkitTextFillColor?: Property.WebkitTextFillColor | undefined;
  WebkitTextOrientation?: Property.TextOrientation | undefined;
  WebkitTextSizeAdjust?: Property.TextSizeAdjust | undefined;
  WebkitTextStrokeColor?: Property.WebkitTextStrokeColor | undefined;
  WebkitTextStrokeWidth?: Property.WebkitTextStrokeWidth<TLength> | undefined;
  WebkitTextUnderlinePosition?: Property.TextUnderlinePosition | undefined;
  WebkitTouchCallout?: Property.WebkitTouchCallout | undefined;
  WebkitTransform?: Property.Transform | undefined;
  WebkitTransformOrigin?: Property.TransformOrigin<TLength> | undefined;
  WebkitTransformStyle?: Property.TransformStyle | undefined;
  WebkitTransitionDelay?: Property.TransitionDelay<TTime> | undefined;
  WebkitTransitionDuration?: Property.TransitionDuration<TTime> | undefined;
  WebkitTransitionProperty?: Property.TransitionProperty | undefined;
  WebkitTransitionTimingFunction?: Property.TransitionTimingFunction | undefined;
  WebkitUserModify?: Property.WebkitUserModify | undefined;
  WebkitUserSelect?: Property.UserSelect | undefined;
  WebkitWritingMode?: Property.WritingMode | undefined;
}
interface VendorShorthandProperties<TLength = (string & {}) | 0, TTime = string & {}> {
  MozAnimation?: Property.Animation<TTime> | undefined;
  MozBorderImage?: Property.BorderImage | undefined;
  MozColumnRule?: Property.ColumnRule<TLength> | undefined;
  MozColumns?: Property.Columns<TLength> | undefined;
  MozTransition?: Property.Transition<TTime> | undefined;
  msContentZoomLimit?: Property.MsContentZoomLimit | undefined;
  msContentZoomSnap?: Property.MsContentZoomSnap | undefined;
  msFlex?: Property.Flex<TLength> | undefined;
  msScrollLimit?: Property.MsScrollLimit | undefined;
  msScrollSnapX?: Property.MsScrollSnapX | undefined;
  msScrollSnapY?: Property.MsScrollSnapY | undefined;
  msTransition?: Property.Transition<TTime> | undefined;
  WebkitAnimation?: Property.Animation<TTime> | undefined;
  WebkitBorderBefore?: Property.WebkitBorderBefore<TLength> | undefined;
  WebkitBorderImage?: Property.BorderImage | undefined;
  WebkitBorderRadius?: Property.BorderRadius<TLength> | undefined;
  WebkitColumnRule?: Property.ColumnRule<TLength> | undefined;
  WebkitColumns?: Property.Columns<TLength> | undefined;
  WebkitFlex?: Property.Flex<TLength> | undefined;
  WebkitFlexFlow?: Property.FlexFlow | undefined;
  WebkitMask?: Property.WebkitMask<TLength> | undefined;
  WebkitMaskBoxImage?: Property.MaskBorder | undefined;
  WebkitTextEmphasis?: Property.TextEmphasis | undefined;
  WebkitTextStroke?: Property.WebkitTextStroke<TLength> | undefined;
  WebkitTransition?: Property.Transition<TTime> | undefined;
}
interface VendorProperties<TLength = (string & {}) | 0, TTime = string & {}> extends VendorLonghandProperties<TLength, TTime>, VendorShorthandProperties<TLength, TTime> {}
interface ObsoleteProperties<TLength = (string & {}) | 0, TTime = string & {}> {
  azimuth?: Property.Azimuth | undefined;
  boxAlign?: Property.BoxAlign | undefined;
  boxDirection?: Property.BoxDirection | undefined;
  boxFlex?: Property.BoxFlex | undefined;
  boxFlexGroup?: Property.BoxFlexGroup | undefined;
  boxLines?: Property.BoxLines | undefined;
  boxOrdinalGroup?: Property.BoxOrdinalGroup | undefined;
  boxOrient?: Property.BoxOrient | undefined;
  boxPack?: Property.BoxPack | undefined;
  clip?: Property.Clip | undefined;
  gridColumnGap?: Property.GridColumnGap<TLength> | undefined;
  gridGap?: Property.GridGap<TLength> | undefined;
  gridRowGap?: Property.GridRowGap<TLength> | undefined;
  imeMode?: Property.ImeMode | undefined;
  offsetBlock?: Property.InsetBlock<TLength> | undefined;
  offsetBlockEnd?: Property.InsetBlockEnd<TLength> | undefined;
  offsetBlockStart?: Property.InsetBlockStart<TLength> | undefined;
  offsetInline?: Property.InsetInline<TLength> | undefined;
  offsetInlineEnd?: Property.InsetInlineEnd<TLength> | undefined;
  offsetInlineStart?: Property.InsetInlineStart<TLength> | undefined;
  scrollSnapCoordinate?: Property.ScrollSnapCoordinate<TLength> | undefined;
  scrollSnapDestination?: Property.ScrollSnapDestination<TLength> | undefined;
  scrollSnapPointsX?: Property.ScrollSnapPointsX | undefined;
  scrollSnapPointsY?: Property.ScrollSnapPointsY | undefined;
  scrollSnapTypeX?: Property.ScrollSnapTypeX | undefined;
  scrollSnapTypeY?: Property.ScrollSnapTypeY | undefined;
  KhtmlBoxAlign?: Property.BoxAlign | undefined;
  KhtmlBoxDirection?: Property.BoxDirection | undefined;
  KhtmlBoxFlex?: Property.BoxFlex | undefined;
  KhtmlBoxFlexGroup?: Property.BoxFlexGroup | undefined;
  KhtmlBoxLines?: Property.BoxLines | undefined;
  KhtmlBoxOrdinalGroup?: Property.BoxOrdinalGroup | undefined;
  KhtmlBoxOrient?: Property.BoxOrient | undefined;
  KhtmlBoxPack?: Property.BoxPack | undefined;
  KhtmlLineBreak?: Property.LineBreak | undefined;
  KhtmlOpacity?: Property.Opacity | undefined;
  KhtmlUserSelect?: Property.UserSelect | undefined;
  MozBackgroundClip?: Property.BackgroundClip | undefined;
  MozBackgroundInlinePolicy?: Property.BoxDecorationBreak | undefined;
  MozBackgroundOrigin?: Property.BackgroundOrigin | undefined;
  MozBackgroundSize?: Property.BackgroundSize<TLength> | undefined;
  MozBinding?: Property.MozBinding | undefined;
  MozBorderRadius?: Property.BorderRadius<TLength> | undefined;
  MozBorderRadiusBottomleft?: Property.BorderBottomLeftRadius<TLength> | undefined;
  MozBorderRadiusBottomright?: Property.BorderBottomRightRadius<TLength> | undefined;
  MozBorderRadiusTopleft?: Property.BorderTopLeftRadius<TLength> | undefined;
  MozBorderRadiusTopright?: Property.BorderTopRightRadius<TLength> | undefined;
  MozBoxAlign?: Property.BoxAlign | undefined;
  MozBoxDirection?: Property.BoxDirection | undefined;
  MozBoxFlex?: Property.BoxFlex | undefined;
  MozBoxOrdinalGroup?: Property.BoxOrdinalGroup | undefined;
  MozBoxOrient?: Property.BoxOrient | undefined;
  MozBoxPack?: Property.BoxPack | undefined;
  MozBoxShadow?: Property.BoxShadow | undefined;
  MozFloatEdge?: Property.MozFloatEdge | undefined;
  MozForceBrokenImageIcon?: Property.MozForceBrokenImageIcon | undefined;
  MozOpacity?: Property.Opacity | undefined;
  MozOutline?: Property.Outline<TLength> | undefined;
  MozOutlineColor?: Property.OutlineColor | undefined;
  MozOutlineRadius?: Property.MozOutlineRadius<TLength> | undefined;
  MozOutlineRadiusBottomleft?: Property.MozOutlineRadiusBottomleft<TLength> | undefined;
  MozOutlineRadiusBottomright?: Property.MozOutlineRadiusBottomright<TLength> | undefined;
  MozOutlineRadiusTopleft?: Property.MozOutlineRadiusTopleft<TLength> | undefined;
  MozOutlineRadiusTopright?: Property.MozOutlineRadiusTopright<TLength> | undefined;
  MozOutlineStyle?: Property.OutlineStyle | undefined;
  MozOutlineWidth?: Property.OutlineWidth<TLength> | undefined;
  MozTextAlignLast?: Property.TextAlignLast | undefined;
  MozTextDecorationColor?: Property.TextDecorationColor | undefined;
  MozTextDecorationLine?: Property.TextDecorationLine | undefined;
  MozTextDecorationStyle?: Property.TextDecorationStyle | undefined;
  MozUserInput?: Property.MozUserInput | undefined;
  msImeMode?: Property.ImeMode | undefined;
  OAnimation?: Property.Animation<TTime> | undefined;
  OAnimationDelay?: Property.AnimationDelay<TTime> | undefined;
  OAnimationDirection?: Property.AnimationDirection | undefined;
  OAnimationDuration?: Property.AnimationDuration<TTime> | undefined;
  OAnimationFillMode?: Property.AnimationFillMode | undefined;
  OAnimationIterationCount?: Property.AnimationIterationCount | undefined;
  OAnimationName?: Property.AnimationName | undefined;
  OAnimationPlayState?: Property.AnimationPlayState | undefined;
  OAnimationTimingFunction?: Property.AnimationTimingFunction | undefined;
  OBackgroundSize?: Property.BackgroundSize<TLength> | undefined;
  OBorderImage?: Property.BorderImage | undefined;
  OObjectFit?: Property.ObjectFit | undefined;
  OObjectPosition?: Property.ObjectPosition<TLength> | undefined;
  OTabSize?: Property.TabSize<TLength> | undefined;
  OTextOverflow?: Property.TextOverflow | undefined;
  OTransform?: Property.Transform | undefined;
  OTransformOrigin?: Property.TransformOrigin<TLength> | undefined;
  OTransition?: Property.Transition<TTime> | undefined;
  OTransitionDelay?: Property.TransitionDelay<TTime> | undefined;
  OTransitionDuration?: Property.TransitionDuration<TTime> | undefined;
  OTransitionProperty?: Property.TransitionProperty | undefined;
  OTransitionTimingFunction?: Property.TransitionTimingFunction | undefined;
  WebkitBoxAlign?: Property.BoxAlign | undefined;
  WebkitBoxDirection?: Property.BoxDirection | undefined;
  WebkitBoxFlex?: Property.BoxFlex | undefined;
  WebkitBoxFlexGroup?: Property.BoxFlexGroup | undefined;
  WebkitBoxLines?: Property.BoxLines | undefined;
  WebkitBoxOrdinalGroup?: Property.BoxOrdinalGroup | undefined;
  WebkitBoxOrient?: Property.BoxOrient | undefined;
  WebkitBoxPack?: Property.BoxPack | undefined;
  WebkitScrollSnapPointsX?: Property.ScrollSnapPointsX | undefined;
  WebkitScrollSnapPointsY?: Property.ScrollSnapPointsY | undefined;
}
interface SvgProperties<TLength = (string & {}) | 0, TTime = string & {}> {
  alignmentBaseline?: Property.AlignmentBaseline | undefined;
  baselineShift?: Property.BaselineShift<TLength> | undefined;
  clip?: Property.Clip | undefined;
  clipPath?: Property.ClipPath | undefined;
  clipRule?: Property.ClipRule | undefined;
  color?: Property.Color | undefined;
  colorInterpolation?: Property.ColorInterpolation | undefined;
  colorRendering?: Property.ColorRendering | undefined;
  cursor?: Property.Cursor | undefined;
  direction?: Property.Direction | undefined;
  display?: Property.Display | undefined;
  dominantBaseline?: Property.DominantBaseline | undefined;
  fill?: Property.Fill | undefined;
  fillOpacity?: Property.FillOpacity | undefined;
  fillRule?: Property.FillRule | undefined;
  filter?: Property.Filter | undefined;
  floodColor?: Property.FloodColor | undefined;
  floodOpacity?: Property.FloodOpacity | undefined;
  font?: Property.Font | undefined;
  fontFamily?: Property.FontFamily | undefined;
  fontSize?: Property.FontSize<TLength> | undefined;
  fontSizeAdjust?: Property.FontSizeAdjust | undefined;
  fontStretch?: Property.FontStretch | undefined;
  fontStyle?: Property.FontStyle | undefined;
  fontVariant?: Property.FontVariant | undefined;
  fontWeight?: Property.FontWeight | undefined;
  glyphOrientationVertical?: Property.GlyphOrientationVertical | undefined;
  imageRendering?: Property.ImageRendering | undefined;
  letterSpacing?: Property.LetterSpacing<TLength> | undefined;
  lightingColor?: Property.LightingColor | undefined;
  lineHeight?: Property.LineHeight<TLength> | undefined;
  marker?: Property.Marker | undefined;
  markerEnd?: Property.MarkerEnd | undefined;
  markerMid?: Property.MarkerMid | undefined;
  markerStart?: Property.MarkerStart | undefined;
  mask?: Property.Mask<TLength> | undefined;
  opacity?: Property.Opacity | undefined;
  overflow?: Property.Overflow | undefined;
  paintOrder?: Property.PaintOrder | undefined;
  pointerEvents?: Property.PointerEvents | undefined;
  shapeRendering?: Property.ShapeRendering | undefined;
  stopColor?: Property.StopColor | undefined;
  stopOpacity?: Property.StopOpacity | undefined;
  stroke?: Property.Stroke | undefined;
  strokeDasharray?: Property.StrokeDasharray<TLength> | undefined;
  strokeDashoffset?: Property.StrokeDashoffset<TLength> | undefined;
  strokeLinecap?: Property.StrokeLinecap | undefined;
  strokeLinejoin?: Property.StrokeLinejoin | undefined;
  strokeMiterlimit?: Property.StrokeMiterlimit | undefined;
  strokeOpacity?: Property.StrokeOpacity | undefined;
  strokeWidth?: Property.StrokeWidth<TLength> | undefined;
  textAnchor?: Property.TextAnchor | undefined;
  textDecoration?: Property.TextDecoration<TLength> | undefined;
  textRendering?: Property.TextRendering | undefined;
  unicodeBidi?: Property.UnicodeBidi | undefined;
  vectorEffect?: Property.VectorEffect | undefined;
  visibility?: Property.Visibility | undefined;
  whiteSpace?: Property.WhiteSpace | undefined;
  wordSpacing?: Property.WordSpacing<TLength> | undefined;
  writingMode?: Property.WritingMode | undefined;
}
interface Properties<TLength = (string & {}) | 0, TTime = string & {}>
  extends StandardProperties<TLength, TTime>,
    VendorProperties<TLength, TTime>,
    ObsoleteProperties<TLength, TTime>,
    SvgProperties<TLength, TTime> {}
interface StandardLonghandPropertiesHyphen<TLength = (string & {}) | 0, TTime = string & {}> {
  "accent-color"?: Property.AccentColor | undefined;
  "align-content"?: Property.AlignContent | undefined;
  "align-items"?: Property.AlignItems | undefined;
  "align-self"?: Property.AlignSelf | undefined;
  "align-tracks"?: Property.AlignTracks | undefined;
  "animation-composition"?: Property.AnimationComposition | undefined;
  "animation-delay"?: Property.AnimationDelay<TTime> | undefined;
  "animation-direction"?: Property.AnimationDirection | undefined;
  "animation-duration"?: Property.AnimationDuration<TTime> | undefined;
  "animation-fill-mode"?: Property.AnimationFillMode | undefined;
  "animation-iteration-count"?: Property.AnimationIterationCount | undefined;
  "animation-name"?: Property.AnimationName | undefined;
  "animation-play-state"?: Property.AnimationPlayState | undefined;
  "animation-timeline"?: Property.AnimationTimeline | undefined;
  "animation-timing-function"?: Property.AnimationTimingFunction | undefined;
  appearance?: Property.Appearance | undefined;
  "aspect-ratio"?: Property.AspectRatio | undefined;
  "backdrop-filter"?: Property.BackdropFilter | undefined;
  "backface-visibility"?: Property.BackfaceVisibility | undefined;
  "background-attachment"?: Property.BackgroundAttachment | undefined;
  "background-blend-mode"?: Property.BackgroundBlendMode | undefined;
  "background-clip"?: Property.BackgroundClip | undefined;
  "background-color"?: Property.BackgroundColor | undefined;
  "background-image"?: Property.BackgroundImage | undefined;
  "background-origin"?: Property.BackgroundOrigin | undefined;
  "background-position-x"?: Property.BackgroundPositionX<TLength> | undefined;
  "background-position-y"?: Property.BackgroundPositionY<TLength> | undefined;
  "background-repeat"?: Property.BackgroundRepeat | undefined;
  "background-size"?: Property.BackgroundSize<TLength> | undefined;
  "block-overflow"?: Property.BlockOverflow | undefined;
  "block-size"?: Property.BlockSize<TLength> | undefined;
  "border-block-color"?: Property.BorderBlockColor | undefined;
  "border-block-end-color"?: Property.BorderBlockEndColor | undefined;
  "border-block-end-style"?: Property.BorderBlockEndStyle | undefined;
  "border-block-end-width"?: Property.BorderBlockEndWidth<TLength> | undefined;
  "border-block-start-color"?: Property.BorderBlockStartColor | undefined;
  "border-block-start-style"?: Property.BorderBlockStartStyle | undefined;
  "border-block-start-width"?: Property.BorderBlockStartWidth<TLength> | undefined;
  "border-block-style"?: Property.BorderBlockStyle | undefined;
  "border-block-width"?: Property.BorderBlockWidth<TLength> | undefined;
  "border-bottom-color"?: Property.BorderBottomColor | undefined;
  "border-bottom-left-radius"?: Property.BorderBottomLeftRadius<TLength> | undefined;
  "border-bottom-right-radius"?: Property.BorderBottomRightRadius<TLength> | undefined;
  "border-bottom-style"?: Property.BorderBottomStyle | undefined;
  "border-bottom-width"?: Property.BorderBottomWidth<TLength> | undefined;
  "border-collapse"?: Property.BorderCollapse | undefined;
  "border-end-end-radius"?: Property.BorderEndEndRadius<TLength> | undefined;
  "border-end-start-radius"?: Property.BorderEndStartRadius<TLength> | undefined;
  "border-image-outset"?: Property.BorderImageOutset<TLength> | undefined;
  "border-image-repeat"?: Property.BorderImageRepeat | undefined;
  "border-image-slice"?: Property.BorderImageSlice | undefined;
  "border-image-source"?: Property.BorderImageSource | undefined;
  "border-image-width"?: Property.BorderImageWidth<TLength> | undefined;
  "border-inline-color"?: Property.BorderInlineColor | undefined;
  "border-inline-end-color"?: Property.BorderInlineEndColor | undefined;
  "border-inline-end-style"?: Property.BorderInlineEndStyle | undefined;
  "border-inline-end-width"?: Property.BorderInlineEndWidth<TLength> | undefined;
  "border-inline-start-color"?: Property.BorderInlineStartColor | undefined;
  "border-inline-start-style"?: Property.BorderInlineStartStyle | undefined;
  "border-inline-start-width"?: Property.BorderInlineStartWidth<TLength> | undefined;
  "border-inline-style"?: Property.BorderInlineStyle | undefined;
  "border-inline-width"?: Property.BorderInlineWidth<TLength> | undefined;
  "border-left-color"?: Property.BorderLeftColor | undefined;
  "border-left-style"?: Property.BorderLeftStyle | undefined;
  "border-left-width"?: Property.BorderLeftWidth<TLength> | undefined;
  "border-right-color"?: Property.BorderRightColor | undefined;
  "border-right-style"?: Property.BorderRightStyle | undefined;
  "border-right-width"?: Property.BorderRightWidth<TLength> | undefined;
  "border-spacing"?: Property.BorderSpacing<TLength> | undefined;
  "border-start-end-radius"?: Property.BorderStartEndRadius<TLength> | undefined;
  "border-start-start-radius"?: Property.BorderStartStartRadius<TLength> | undefined;
  "border-top-color"?: Property.BorderTopColor | undefined;
  "border-top-left-radius"?: Property.BorderTopLeftRadius<TLength> | undefined;
  "border-top-right-radius"?: Property.BorderTopRightRadius<TLength> | undefined;
  "border-top-style"?: Property.BorderTopStyle | undefined;
  "border-top-width"?: Property.BorderTopWidth<TLength> | undefined;
  bottom?: Property.Bottom<TLength> | undefined;
  "box-decoration-break"?: Property.BoxDecorationBreak | undefined;
  "box-shadow"?: Property.BoxShadow | undefined;
  "box-sizing"?: Property.BoxSizing | undefined;
  "break-after"?: Property.BreakAfter | undefined;
  "break-before"?: Property.BreakBefore | undefined;
  "break-inside"?: Property.BreakInside | undefined;
  "caption-side"?: Property.CaptionSide | undefined;
  "caret-color"?: Property.CaretColor | undefined;
  clear?: Property.Clear | undefined;
  "clip-path"?: Property.ClipPath | undefined;
  color?: Property.Color | undefined;
  "color-adjust"?: Property.PrintColorAdjust | undefined;
  "color-scheme"?: Property.ColorScheme | undefined;
  "column-count"?: Property.ColumnCount | undefined;
  "column-fill"?: Property.ColumnFill | undefined;
  "column-gap"?: Property.ColumnGap<TLength> | undefined;
  "column-rule-color"?: Property.ColumnRuleColor | undefined;
  "column-rule-style"?: Property.ColumnRuleStyle | undefined;
  "column-rule-width"?: Property.ColumnRuleWidth<TLength> | undefined;
  "column-span"?: Property.ColumnSpan | undefined;
  "column-width"?: Property.ColumnWidth<TLength> | undefined;
  contain?: Property.Contain | undefined;
  content?: Property.Content | undefined;
  "content-visibility"?: Property.ContentVisibility | undefined;
  "counter-increment"?: Property.CounterIncrement | undefined;
  "counter-reset"?: Property.CounterReset | undefined;
  "counter-set"?: Property.CounterSet | undefined;
  cursor?: Property.Cursor | undefined;
  direction?: Property.Direction | undefined;
  display?: Property.Display | undefined;
  "empty-cells"?: Property.EmptyCells | undefined;
  filter?: Property.Filter | undefined;
  "flex-basis"?: Property.FlexBasis<TLength> | undefined;
  "flex-direction"?: Property.FlexDirection | undefined;
  "flex-grow"?: Property.FlexGrow | undefined;
  "flex-shrink"?: Property.FlexShrink | undefined;
  "flex-wrap"?: Property.FlexWrap | undefined;
  float?: Property.Float | undefined;
  "font-family"?: Property.FontFamily | undefined;
  "font-feature-settings"?: Property.FontFeatureSettings | undefined;
  "font-kerning"?: Property.FontKerning | undefined;
  "font-language-override"?: Property.FontLanguageOverride | undefined;
  "font-optical-sizing"?: Property.FontOpticalSizing | undefined;
  "font-size"?: Property.FontSize<TLength> | undefined;
  "font-size-adjust"?: Property.FontSizeAdjust | undefined;
  "font-smooth"?: Property.FontSmooth<TLength> | undefined;
  "font-stretch"?: Property.FontStretch | undefined;
  "font-style"?: Property.FontStyle | undefined;
  "font-synthesis"?: Property.FontSynthesis | undefined;
  "font-variant"?: Property.FontVariant | undefined;
  "font-variant-alternates"?: Property.FontVariantAlternates | undefined;
  "font-variant-caps"?: Property.FontVariantCaps | undefined;
  "font-variant-east-asian"?: Property.FontVariantEastAsian | undefined;
  "font-variant-ligatures"?: Property.FontVariantLigatures | undefined;
  "font-variant-numeric"?: Property.FontVariantNumeric | undefined;
  "font-variant-position"?: Property.FontVariantPosition | undefined;
  "font-variation-settings"?: Property.FontVariationSettings | undefined;
  "font-weight"?: Property.FontWeight | undefined;
  "forced-color-adjust"?: Property.ForcedColorAdjust | undefined;
  "grid-auto-columns"?: Property.GridAutoColumns<TLength> | undefined;
  "grid-auto-flow"?: Property.GridAutoFlow | undefined;
  "grid-auto-rows"?: Property.GridAutoRows<TLength> | undefined;
  "grid-column-end"?: Property.GridColumnEnd | undefined;
  "grid-column-start"?: Property.GridColumnStart | undefined;
  "grid-row-end"?: Property.GridRowEnd | undefined;
  "grid-row-start"?: Property.GridRowStart | undefined;
  "grid-template-areas"?: Property.GridTemplateAreas | undefined;
  "grid-template-columns"?: Property.GridTemplateColumns<TLength> | undefined;
  "grid-template-rows"?: Property.GridTemplateRows<TLength> | undefined;
  "hanging-punctuation"?: Property.HangingPunctuation | undefined;
  height?: Property.Height<TLength> | undefined;
  "hyphenate-character"?: Property.HyphenateCharacter | undefined;
  hyphens?: Property.Hyphens | undefined;
  "image-orientation"?: Property.ImageOrientation | undefined;
  "image-rendering"?: Property.ImageRendering | undefined;
  "image-resolution"?: Property.ImageResolution | undefined;
  "initial-letter"?: Property.InitialLetter | undefined;
  "inline-size"?: Property.InlineSize<TLength> | undefined;
  "input-security"?: Property.InputSecurity | undefined;
  inset?: Property.Inset<TLength> | undefined;
  "inset-block"?: Property.InsetBlock<TLength> | undefined;
  "inset-block-end"?: Property.InsetBlockEnd<TLength> | undefined;
  "inset-block-start"?: Property.InsetBlockStart<TLength> | undefined;
  "inset-inline"?: Property.InsetInline<TLength> | undefined;
  "inset-inline-end"?: Property.InsetInlineEnd<TLength> | undefined;
  "inset-inline-start"?: Property.InsetInlineStart<TLength> | undefined;
  isolation?: Property.Isolation | undefined;
  "justify-content"?: Property.JustifyContent | undefined;
  "justify-items"?: Property.JustifyItems | undefined;
  "justify-self"?: Property.JustifySelf | undefined;
  "justify-tracks"?: Property.JustifyTracks | undefined;
  left?: Property.Left<TLength> | undefined;
  "letter-spacing"?: Property.LetterSpacing<TLength> | undefined;
  "line-break"?: Property.LineBreak | undefined;
  "line-height"?: Property.LineHeight<TLength> | undefined;
  "line-height-step"?: Property.LineHeightStep<TLength> | undefined;
  "list-style-image"?: Property.ListStyleImage | undefined;
  "list-style-position"?: Property.ListStylePosition | undefined;
  "list-style-type"?: Property.ListStyleType | undefined;
  "margin-block"?: Property.MarginBlock<TLength> | undefined;
  "margin-block-end"?: Property.MarginBlockEnd<TLength> | undefined;
  "margin-block-start"?: Property.MarginBlockStart<TLength> | undefined;
  "margin-bottom"?: Property.MarginBottom<TLength> | undefined;
  "margin-inline"?: Property.MarginInline<TLength> | undefined;
  "margin-inline-end"?: Property.MarginInlineEnd<TLength> | undefined;
  "margin-inline-start"?: Property.MarginInlineStart<TLength> | undefined;
  "margin-left"?: Property.MarginLeft<TLength> | undefined;
  "margin-right"?: Property.MarginRight<TLength> | undefined;
  "margin-top"?: Property.MarginTop<TLength> | undefined;
  "mask-border-mode"?: Property.MaskBorderMode | undefined;
  "mask-border-outset"?: Property.MaskBorderOutset<TLength> | undefined;
  "mask-border-repeat"?: Property.MaskBorderRepeat | undefined;
  "mask-border-slice"?: Property.MaskBorderSlice | undefined;
  "mask-border-source"?: Property.MaskBorderSource | undefined;
  "mask-border-width"?: Property.MaskBorderWidth<TLength> | undefined;
  "mask-clip"?: Property.MaskClip | undefined;
  "mask-composite"?: Property.MaskComposite | undefined;
  "mask-image"?: Property.MaskImage | undefined;
  "mask-mode"?: Property.MaskMode | undefined;
  "mask-origin"?: Property.MaskOrigin | undefined;
  "mask-position"?: Property.MaskPosition<TLength> | undefined;
  "mask-repeat"?: Property.MaskRepeat | undefined;
  "mask-size"?: Property.MaskSize<TLength> | undefined;
  "mask-type"?: Property.MaskType | undefined;
  "math-depth"?: Property.MathDepth | undefined;
  "math-shift"?: Property.MathShift | undefined;
  "math-style"?: Property.MathStyle | undefined;
  "max-block-size"?: Property.MaxBlockSize<TLength> | undefined;
  "max-height"?: Property.MaxHeight<TLength> | undefined;
  "max-inline-size"?: Property.MaxInlineSize<TLength> | undefined;
  "max-lines"?: Property.MaxLines | undefined;
  "max-width"?: Property.MaxWidth<TLength> | undefined;
  "min-block-size"?: Property.MinBlockSize<TLength> | undefined;
  "min-height"?: Property.MinHeight<TLength> | undefined;
  "min-inline-size"?: Property.MinInlineSize<TLength> | undefined;
  "min-width"?: Property.MinWidth<TLength> | undefined;
  "mix-blend-mode"?: Property.MixBlendMode | undefined;
  "motion-distance"?: Property.OffsetDistance<TLength> | undefined;
  "motion-path"?: Property.OffsetPath | undefined;
  "motion-rotation"?: Property.OffsetRotate | undefined;
  "object-fit"?: Property.ObjectFit | undefined;
  "object-position"?: Property.ObjectPosition<TLength> | undefined;
  "offset-anchor"?: Property.OffsetAnchor<TLength> | undefined;
  "offset-distance"?: Property.OffsetDistance<TLength> | undefined;
  "offset-path"?: Property.OffsetPath | undefined;
  "offset-rotate"?: Property.OffsetRotate | undefined;
  "offset-rotation"?: Property.OffsetRotate | undefined;
  opacity?: Property.Opacity | undefined;
  order?: Property.Order | undefined;
  orphans?: Property.Orphans | undefined;
  "outline-color"?: Property.OutlineColor | undefined;
  "outline-offset"?: Property.OutlineOffset<TLength> | undefined;
  "outline-style"?: Property.OutlineStyle | undefined;
  "outline-width"?: Property.OutlineWidth<TLength> | undefined;
  "overflow-anchor"?: Property.OverflowAnchor | undefined;
  "overflow-block"?: Property.OverflowBlock | undefined;
  "overflow-clip-box"?: Property.OverflowClipBox | undefined;
  "overflow-clip-margin"?: Property.OverflowClipMargin<TLength> | undefined;
  "overflow-inline"?: Property.OverflowInline | undefined;
  "overflow-wrap"?: Property.OverflowWrap | undefined;
  "overflow-x"?: Property.OverflowX | undefined;
  "overflow-y"?: Property.OverflowY | undefined;
  "overscroll-behavior-block"?: Property.OverscrollBehaviorBlock | undefined;
  "overscroll-behavior-inline"?: Property.OverscrollBehaviorInline | undefined;
  "overscroll-behavior-x"?: Property.OverscrollBehaviorX | undefined;
  "overscroll-behavior-y"?: Property.OverscrollBehaviorY | undefined;
  "padding-block"?: Property.PaddingBlock<TLength> | undefined;
  "padding-block-end"?: Property.PaddingBlockEnd<TLength> | undefined;
  "padding-block-start"?: Property.PaddingBlockStart<TLength> | undefined;
  "padding-bottom"?: Property.PaddingBottom<TLength> | undefined;
  "padding-inline"?: Property.PaddingInline<TLength> | undefined;
  "padding-inline-end"?: Property.PaddingInlineEnd<TLength> | undefined;
  "padding-inline-start"?: Property.PaddingInlineStart<TLength> | undefined;
  "padding-left"?: Property.PaddingLeft<TLength> | undefined;
  "padding-right"?: Property.PaddingRight<TLength> | undefined;
  "padding-top"?: Property.PaddingTop<TLength> | undefined;
  "page-break-after"?: Property.PageBreakAfter | undefined;
  "page-break-before"?: Property.PageBreakBefore | undefined;
  "page-break-inside"?: Property.PageBreakInside | undefined;
  "paint-order"?: Property.PaintOrder | undefined;
  perspective?: Property.Perspective<TLength> | undefined;
  "perspective-origin"?: Property.PerspectiveOrigin<TLength> | undefined;
  "place-content"?: Property.PlaceContent | undefined;
  "pointer-events"?: Property.PointerEvents | undefined;
  position?: Property.Position | undefined;
  "print-color-adjust"?: Property.PrintColorAdjust | undefined;
  quotes?: Property.Quotes | undefined;
  resize?: Property.Resize | undefined;
  right?: Property.Right<TLength> | undefined;
  rotate?: Property.Rotate | undefined;
  "row-gap"?: Property.RowGap<TLength> | undefined;
  "ruby-align"?: Property.RubyAlign | undefined;
  "ruby-merge"?: Property.RubyMerge | undefined;
  "ruby-position"?: Property.RubyPosition | undefined;
  scale?: Property.Scale | undefined;
  "scroll-behavior"?: Property.ScrollBehavior | undefined;
  "scroll-margin"?: Property.ScrollMargin<TLength> | undefined;
  "scroll-margin-block"?: Property.ScrollMarginBlock<TLength> | undefined;
  "scroll-margin-block-end"?: Property.ScrollMarginBlockEnd<TLength> | undefined;
  "scroll-margin-block-start"?: Property.ScrollMarginBlockStart<TLength> | undefined;
  "scroll-margin-bottom"?: Property.ScrollMarginBottom<TLength> | undefined;
  "scroll-margin-inline"?: Property.ScrollMarginInline<TLength> | undefined;
  "scroll-margin-inline-end"?: Property.ScrollMarginInlineEnd<TLength> | undefined;
  "scroll-margin-inline-start"?: Property.ScrollMarginInlineStart<TLength> | undefined;
  "scroll-margin-left"?: Property.ScrollMarginLeft<TLength> | undefined;
  "scroll-margin-right"?: Property.ScrollMarginRight<TLength> | undefined;
  "scroll-margin-top"?: Property.ScrollMarginTop<TLength> | undefined;
  "scroll-padding"?: Property.ScrollPadding<TLength> | undefined;
  "scroll-padding-block"?: Property.ScrollPaddingBlock<TLength> | undefined;
  "scroll-padding-block-end"?: Property.ScrollPaddingBlockEnd<TLength> | undefined;
  "scroll-padding-block-start"?: Property.ScrollPaddingBlockStart<TLength> | undefined;
  "scroll-padding-bottom"?: Property.ScrollPaddingBottom<TLength> | undefined;
  "scroll-padding-inline"?: Property.ScrollPaddingInline<TLength> | undefined;
  "scroll-padding-inline-end"?: Property.ScrollPaddingInlineEnd<TLength> | undefined;
  "scroll-padding-inline-start"?: Property.ScrollPaddingInlineStart<TLength> | undefined;
  "scroll-padding-left"?: Property.ScrollPaddingLeft<TLength> | undefined;
  "scroll-padding-right"?: Property.ScrollPaddingRight<TLength> | undefined;
  "scroll-padding-top"?: Property.ScrollPaddingTop<TLength> | undefined;
  "scroll-snap-align"?: Property.ScrollSnapAlign | undefined;
  "scroll-snap-margin"?: Property.ScrollMargin<TLength> | undefined;
  "scroll-snap-margin-bottom"?: Property.ScrollMarginBottom<TLength> | undefined;
  "scroll-snap-margin-left"?: Property.ScrollMarginLeft<TLength> | undefined;
  "scroll-snap-margin-right"?: Property.ScrollMarginRight<TLength> | undefined;
  "scroll-snap-margin-top"?: Property.ScrollMarginTop<TLength> | undefined;
  "scroll-snap-stop"?: Property.ScrollSnapStop | undefined;
  "scroll-snap-type"?: Property.ScrollSnapType | undefined;
  "scrollbar-color"?: Property.ScrollbarColor | undefined;
  "scrollbar-gutter"?: Property.ScrollbarGutter | undefined;
  "scrollbar-width"?: Property.ScrollbarWidth | undefined;
  "shape-image-threshold"?: Property.ShapeImageThreshold | undefined;
  "shape-margin"?: Property.ShapeMargin<TLength> | undefined;
  "shape-outside"?: Property.ShapeOutside | undefined;
  "tab-size"?: Property.TabSize<TLength> | undefined;
  "table-layout"?: Property.TableLayout | undefined;
  "text-align"?: Property.TextAlign | undefined;
  "text-align-last"?: Property.TextAlignLast | undefined;
  "text-combine-upright"?: Property.TextCombineUpright | undefined;
  "text-decoration-color"?: Property.TextDecorationColor | undefined;
  "text-decoration-line"?: Property.TextDecorationLine | undefined;
  "text-decoration-skip"?: Property.TextDecorationSkip | undefined;
  "text-decoration-skip-ink"?: Property.TextDecorationSkipInk | undefined;
  "text-decoration-style"?: Property.TextDecorationStyle | undefined;
  "text-decoration-thickness"?: Property.TextDecorationThickness<TLength> | undefined;
  "text-emphasis-color"?: Property.TextEmphasisColor | undefined;
  "text-emphasis-position"?: Property.TextEmphasisPosition | undefined;
  "text-emphasis-style"?: Property.TextEmphasisStyle | undefined;
  "text-indent"?: Property.TextIndent<TLength> | undefined;
  "text-justify"?: Property.TextJustify | undefined;
  "text-orientation"?: Property.TextOrientation | undefined;
  "text-overflow"?: Property.TextOverflow | undefined;
  "text-rendering"?: Property.TextRendering | undefined;
  "text-shadow"?: Property.TextShadow | undefined;
  "text-size-adjust"?: Property.TextSizeAdjust | undefined;
  "text-transform"?: Property.TextTransform | undefined;
  "text-underline-offset"?: Property.TextUnderlineOffset<TLength> | undefined;
  "text-underline-position"?: Property.TextUnderlinePosition | undefined;
  top?: Property.Top<TLength> | undefined;
  "touch-action"?: Property.TouchAction | undefined;
  transform?: Property.Transform | undefined;
  "transform-box"?: Property.TransformBox | undefined;
  "transform-origin"?: Property.TransformOrigin<TLength> | undefined;
  "transform-style"?: Property.TransformStyle | undefined;
  "transition-delay"?: Property.TransitionDelay<TTime> | undefined;
  "transition-duration"?: Property.TransitionDuration<TTime> | undefined;
  "transition-property"?: Property.TransitionProperty | undefined;
  "transition-timing-function"?: Property.TransitionTimingFunction | undefined;
  translate?: Property.Translate<TLength> | undefined;
  "unicode-bidi"?: Property.UnicodeBidi | undefined;
  "user-select"?: Property.UserSelect | undefined;
  "vertical-align"?: Property.VerticalAlign<TLength> | undefined;
  visibility?: Property.Visibility | undefined;
  "white-space"?: Property.WhiteSpace | undefined;
  widows?: Property.Widows | undefined;
  width?: Property.Width<TLength> | undefined;
  "will-change"?: Property.WillChange | undefined;
  "word-break"?: Property.WordBreak | undefined;
  "word-spacing"?: Property.WordSpacing<TLength> | undefined;
  "word-wrap"?: Property.WordWrap | undefined;
  "writing-mode"?: Property.WritingMode | undefined;
  "z-index"?: Property.ZIndex | undefined;
  zoom?: Property.Zoom | undefined;
}
interface StandardShorthandPropertiesHyphen<TLength = (string & {}) | 0, TTime = string & {}> {
  all?: Property.All | undefined;
  animation?: Property.Animation<TTime> | undefined;
  background?: Property.Background<TLength> | undefined;
  "background-position"?: Property.BackgroundPosition<TLength> | undefined;
  border?: Property.Border<TLength> | undefined;
  "border-block"?: Property.BorderBlock<TLength> | undefined;
  "border-block-end"?: Property.BorderBlockEnd<TLength> | undefined;
  "border-block-start"?: Property.BorderBlockStart<TLength> | undefined;
  "border-bottom"?: Property.BorderBottom<TLength> | undefined;
  "border-color"?: Property.BorderColor | undefined;
  "border-image"?: Property.BorderImage | undefined;
  "border-inline"?: Property.BorderInline<TLength> | undefined;
  "border-inline-end"?: Property.BorderInlineEnd<TLength> | undefined;
  "border-inline-start"?: Property.BorderInlineStart<TLength> | undefined;
  "border-left"?: Property.BorderLeft<TLength> | undefined;
  "border-radius"?: Property.BorderRadius<TLength> | undefined;
  "border-right"?: Property.BorderRight<TLength> | undefined;
  "border-style"?: Property.BorderStyle | undefined;
  "border-top"?: Property.BorderTop<TLength> | undefined;
  "border-width"?: Property.BorderWidth<TLength> | undefined;
  "column-rule"?: Property.ColumnRule<TLength> | undefined;
  columns?: Property.Columns<TLength> | undefined;
  flex?: Property.Flex<TLength> | undefined;
  "flex-flow"?: Property.FlexFlow | undefined;
  font?: Property.Font | undefined;
  gap?: Property.Gap<TLength> | undefined;
  grid?: Property.Grid | undefined;
  "grid-area"?: Property.GridArea | undefined;
  "grid-column"?: Property.GridColumn | undefined;
  "grid-row"?: Property.GridRow | undefined;
  "grid-template"?: Property.GridTemplate | undefined;
  "line-clamp"?: Property.LineClamp | undefined;
  "list-style"?: Property.ListStyle | undefined;
  margin?: Property.Margin<TLength> | undefined;
  mask?: Property.Mask<TLength> | undefined;
  "mask-border"?: Property.MaskBorder | undefined;
  motion?: Property.Offset<TLength> | undefined;
  offset?: Property.Offset<TLength> | undefined;
  outline?: Property.Outline<TLength> | undefined;
  overflow?: Property.Overflow | undefined;
  "overscroll-behavior"?: Property.OverscrollBehavior | undefined;
  padding?: Property.Padding<TLength> | undefined;
  "place-items"?: Property.PlaceItems | undefined;
  "place-self"?: Property.PlaceSelf | undefined;
  "text-decoration"?: Property.TextDecoration<TLength> | undefined;
  "text-emphasis"?: Property.TextEmphasis | undefined;
  transition?: Property.Transition<TTime> | undefined;
}
interface StandardPropertiesHyphen<TLength = (string & {}) | 0, TTime = string & {}>
  extends StandardLonghandPropertiesHyphen<TLength, TTime>,
    StandardShorthandPropertiesHyphen<TLength, TTime> {}
interface VendorLonghandPropertiesHyphen<TLength = (string & {}) | 0, TTime = string & {}> {
  "-moz-animation-delay"?: Property.AnimationDelay<TTime> | undefined;
  "-moz-animation-direction"?: Property.AnimationDirection | undefined;
  "-moz-animation-duration"?: Property.AnimationDuration<TTime> | undefined;
  "-moz-animation-fill-mode"?: Property.AnimationFillMode | undefined;
  "-moz-animation-iteration-count"?: Property.AnimationIterationCount | undefined;
  "-moz-animation-name"?: Property.AnimationName | undefined;
  "-moz-animation-play-state"?: Property.AnimationPlayState | undefined;
  "-moz-animation-timing-function"?: Property.AnimationTimingFunction | undefined;
  "-moz-appearance"?: Property.MozAppearance | undefined;
  "-moz-backface-visibility"?: Property.BackfaceVisibility | undefined;
  "-moz-border-bottom-colors"?: Property.MozBorderBottomColors | undefined;
  "-moz-border-end-color"?: Property.BorderInlineEndColor | undefined;
  "-moz-border-end-style"?: Property.BorderInlineEndStyle | undefined;
  "-moz-border-end-width"?: Property.BorderInlineEndWidth<TLength> | undefined;
  "-moz-border-left-colors"?: Property.MozBorderLeftColors | undefined;
  "-moz-border-right-colors"?: Property.MozBorderRightColors | undefined;
  "-moz-border-start-color"?: Property.BorderInlineStartColor | undefined;
  "-moz-border-start-style"?: Property.BorderInlineStartStyle | undefined;
  "-moz-border-top-colors"?: Property.MozBorderTopColors | undefined;
  "-moz-box-sizing"?: Property.BoxSizing | undefined;
  "-moz-column-count"?: Property.ColumnCount | undefined;
  "-moz-column-fill"?: Property.ColumnFill | undefined;
  "-moz-column-rule-color"?: Property.ColumnRuleColor | undefined;
  "-moz-column-rule-style"?: Property.ColumnRuleStyle | undefined;
  "-moz-column-rule-width"?: Property.ColumnRuleWidth<TLength> | undefined;
  "-moz-column-width"?: Property.ColumnWidth<TLength> | undefined;
  "-moz-context-properties"?: Property.MozContextProperties | undefined;
  "-moz-font-feature-settings"?: Property.FontFeatureSettings | undefined;
  "-moz-font-language-override"?: Property.FontLanguageOverride | undefined;
  "-moz-hyphens"?: Property.Hyphens | undefined;
  "-moz-image-region"?: Property.MozImageRegion | undefined;
  "-moz-margin-end"?: Property.MarginInlineEnd<TLength> | undefined;
  "-moz-margin-start"?: Property.MarginInlineStart<TLength> | undefined;
  "-moz-orient"?: Property.MozOrient | undefined;
  "-moz-osx-font-smoothing"?: Property.FontSmooth<TLength> | undefined;
  "-moz-padding-end"?: Property.PaddingInlineEnd<TLength> | undefined;
  "-moz-padding-start"?: Property.PaddingInlineStart<TLength> | undefined;
  "-moz-perspective"?: Property.Perspective<TLength> | undefined;
  "-moz-perspective-origin"?: Property.PerspectiveOrigin<TLength> | undefined;
  "-moz-stack-sizing"?: Property.MozStackSizing | undefined;
  "-moz-tab-size"?: Property.TabSize<TLength> | undefined;
  "-moz-text-blink"?: Property.MozTextBlink | undefined;
  "-moz-text-size-adjust"?: Property.TextSizeAdjust | undefined;
  "-moz-transform-origin"?: Property.TransformOrigin<TLength> | undefined;
  "-moz-transform-style"?: Property.TransformStyle | undefined;
  "-moz-transition-delay"?: Property.TransitionDelay<TTime> | undefined;
  "-moz-transition-duration"?: Property.TransitionDuration<TTime> | undefined;
  "-moz-transition-property"?: Property.TransitionProperty | undefined;
  "-moz-transition-timing-function"?: Property.TransitionTimingFunction | undefined;
  "-moz-user-focus"?: Property.MozUserFocus | undefined;
  "-moz-user-modify"?: Property.MozUserModify | undefined;
  "-moz-user-select"?: Property.UserSelect | undefined;
  "-moz-window-dragging"?: Property.MozWindowDragging | undefined;
  "-moz-window-shadow"?: Property.MozWindowShadow | undefined;
  "-ms-accelerator"?: Property.MsAccelerator | undefined;
  "-ms-block-progression"?: Property.MsBlockProgression | undefined;
  "-ms-content-zoom-chaining"?: Property.MsContentZoomChaining | undefined;
  "-ms-content-zoom-limit-max"?: Property.MsContentZoomLimitMax | undefined;
  "-ms-content-zoom-limit-min"?: Property.MsContentZoomLimitMin | undefined;
  "-ms-content-zoom-snap-points"?: Property.MsContentZoomSnapPoints | undefined;
  "-ms-content-zoom-snap-type"?: Property.MsContentZoomSnapType | undefined;
  "-ms-content-zooming"?: Property.MsContentZooming | undefined;
  "-ms-filter"?: Property.MsFilter | undefined;
  "-ms-flex-direction"?: Property.FlexDirection | undefined;
  "-ms-flex-positive"?: Property.FlexGrow | undefined;
  "-ms-flow-from"?: Property.MsFlowFrom | undefined;
  "-ms-flow-into"?: Property.MsFlowInto | undefined;
  "-ms-grid-columns"?: Property.MsGridColumns<TLength> | undefined;
  "-ms-grid-rows"?: Property.MsGridRows<TLength> | undefined;
  "-ms-high-contrast-adjust"?: Property.MsHighContrastAdjust | undefined;
  "-ms-hyphenate-limit-chars"?: Property.MsHyphenateLimitChars | undefined;
  "-ms-hyphenate-limit-lines"?: Property.MsHyphenateLimitLines | undefined;
  "-ms-hyphenate-limit-zone"?: Property.MsHyphenateLimitZone<TLength> | undefined;
  "-ms-hyphens"?: Property.Hyphens | undefined;
  "-ms-ime-align"?: Property.MsImeAlign | undefined;
  "-ms-line-break"?: Property.LineBreak | undefined;
  "-ms-order"?: Property.Order | undefined;
  "-ms-overflow-style"?: Property.MsOverflowStyle | undefined;
  "-ms-overflow-x"?: Property.OverflowX | undefined;
  "-ms-overflow-y"?: Property.OverflowY | undefined;
  "-ms-scroll-chaining"?: Property.MsScrollChaining | undefined;
  "-ms-scroll-limit-x-max"?: Property.MsScrollLimitXMax<TLength> | undefined;
  "-ms-scroll-limit-x-min"?: Property.MsScrollLimitXMin<TLength> | undefined;
  "-ms-scroll-limit-y-max"?: Property.MsScrollLimitYMax<TLength> | undefined;
  "-ms-scroll-limit-y-min"?: Property.MsScrollLimitYMin<TLength> | undefined;
  "-ms-scroll-rails"?: Property.MsScrollRails | undefined;
  "-ms-scroll-snap-points-x"?: Property.MsScrollSnapPointsX | undefined;
  "-ms-scroll-snap-points-y"?: Property.MsScrollSnapPointsY | undefined;
  "-ms-scroll-snap-type"?: Property.MsScrollSnapType | undefined;
  "-ms-scroll-translation"?: Property.MsScrollTranslation | undefined;
  "-ms-scrollbar-3dlight-color"?: Property.MsScrollbar3dlightColor | undefined;
  "-ms-scrollbar-arrow-color"?: Property.MsScrollbarArrowColor | undefined;
  "-ms-scrollbar-base-color"?: Property.MsScrollbarBaseColor | undefined;
  "-ms-scrollbar-darkshadow-color"?: Property.MsScrollbarDarkshadowColor | undefined;
  "-ms-scrollbar-face-color"?: Property.MsScrollbarFaceColor | undefined;
  "-ms-scrollbar-highlight-color"?: Property.MsScrollbarHighlightColor | undefined;
  "-ms-scrollbar-shadow-color"?: Property.MsScrollbarShadowColor | undefined;
  "-ms-scrollbar-track-color"?: Property.MsScrollbarTrackColor | undefined;
  "-ms-text-autospace"?: Property.MsTextAutospace | undefined;
  "-ms-text-combine-horizontal"?: Property.TextCombineUpright | undefined;
  "-ms-text-overflow"?: Property.TextOverflow | undefined;
  "-ms-touch-action"?: Property.TouchAction | undefined;
  "-ms-touch-select"?: Property.MsTouchSelect | undefined;
  "-ms-transform"?: Property.Transform | undefined;
  "-ms-transform-origin"?: Property.TransformOrigin<TLength> | undefined;
  "-ms-transition-delay"?: Property.TransitionDelay<TTime> | undefined;
  "-ms-transition-duration"?: Property.TransitionDuration<TTime> | undefined;
  "-ms-transition-property"?: Property.TransitionProperty | undefined;
  "-ms-transition-timing-function"?: Property.TransitionTimingFunction | undefined;
  "-ms-user-select"?: Property.MsUserSelect | undefined;
  "-ms-word-break"?: Property.WordBreak | undefined;
  "-ms-wrap-flow"?: Property.MsWrapFlow | undefined;
  "-ms-wrap-margin"?: Property.MsWrapMargin<TLength> | undefined;
  "-ms-wrap-through"?: Property.MsWrapThrough | undefined;
  "-ms-writing-mode"?: Property.WritingMode | undefined;
  "-webkit-align-content"?: Property.AlignContent | undefined;
  "-webkit-align-items"?: Property.AlignItems | undefined;
  "-webkit-align-self"?: Property.AlignSelf | undefined;
  "-webkit-animation-delay"?: Property.AnimationDelay<TTime> | undefined;
  "-webkit-animation-direction"?: Property.AnimationDirection | undefined;
  "-webkit-animation-duration"?: Property.AnimationDuration<TTime> | undefined;
  "-webkit-animation-fill-mode"?: Property.AnimationFillMode | undefined;
  "-webkit-animation-iteration-count"?: Property.AnimationIterationCount | undefined;
  "-webkit-animation-name"?: Property.AnimationName | undefined;
  "-webkit-animation-play-state"?: Property.AnimationPlayState | undefined;
  "-webkit-animation-timing-function"?: Property.AnimationTimingFunction | undefined;
  "-webkit-appearance"?: Property.WebkitAppearance | undefined;
  "-webkit-backdrop-filter"?: Property.BackdropFilter | undefined;
  "-webkit-backface-visibility"?: Property.BackfaceVisibility | undefined;
  "-webkit-background-clip"?: Property.BackgroundClip | undefined;
  "-webkit-background-origin"?: Property.BackgroundOrigin | undefined;
  "-webkit-background-size"?: Property.BackgroundSize<TLength> | undefined;
  "-webkit-border-before-color"?: Property.WebkitBorderBeforeColor | undefined;
  "-webkit-border-before-style"?: Property.WebkitBorderBeforeStyle | undefined;
  "-webkit-border-before-width"?: Property.WebkitBorderBeforeWidth<TLength> | undefined;
  "-webkit-border-bottom-left-radius"?: Property.BorderBottomLeftRadius<TLength> | undefined;
  "-webkit-border-bottom-right-radius"?: Property.BorderBottomRightRadius<TLength> | undefined;
  "-webkit-border-image-slice"?: Property.BorderImageSlice | undefined;
  "-webkit-border-top-left-radius"?: Property.BorderTopLeftRadius<TLength> | undefined;
  "-webkit-border-top-right-radius"?: Property.BorderTopRightRadius<TLength> | undefined;
  "-webkit-box-decoration-break"?: Property.BoxDecorationBreak | undefined;
  "-webkit-box-reflect"?: Property.WebkitBoxReflect<TLength> | undefined;
  "-webkit-box-shadow"?: Property.BoxShadow | undefined;
  "-webkit-box-sizing"?: Property.BoxSizing | undefined;
  "-webkit-clip-path"?: Property.ClipPath | undefined;
  "-webkit-column-count"?: Property.ColumnCount | undefined;
  "-webkit-column-fill"?: Property.ColumnFill | undefined;
  "-webkit-column-rule-color"?: Property.ColumnRuleColor | undefined;
  "-webkit-column-rule-style"?: Property.ColumnRuleStyle | undefined;
  "-webkit-column-rule-width"?: Property.ColumnRuleWidth<TLength> | undefined;
  "-webkit-column-span"?: Property.ColumnSpan | undefined;
  "-webkit-column-width"?: Property.ColumnWidth<TLength> | undefined;
  "-webkit-filter"?: Property.Filter | undefined;
  "-webkit-flex-basis"?: Property.FlexBasis<TLength> | undefined;
  "-webkit-flex-direction"?: Property.FlexDirection | undefined;
  "-webkit-flex-grow"?: Property.FlexGrow | undefined;
  "-webkit-flex-shrink"?: Property.FlexShrink | undefined;
  "-webkit-flex-wrap"?: Property.FlexWrap | undefined;
  "-webkit-font-feature-settings"?: Property.FontFeatureSettings | undefined;
  "-webkit-font-kerning"?: Property.FontKerning | undefined;
  "-webkit-font-smoothing"?: Property.FontSmooth<TLength> | undefined;
  "-webkit-font-variant-ligatures"?: Property.FontVariantLigatures | undefined;
  "-webkit-hyphenate-character"?: Property.HyphenateCharacter | undefined;
  "-webkit-hyphens"?: Property.Hyphens | undefined;
  "-webkit-initial-letter"?: Property.InitialLetter | undefined;
  "-webkit-justify-content"?: Property.JustifyContent | undefined;
  "-webkit-line-break"?: Property.LineBreak | undefined;
  "-webkit-line-clamp"?: Property.WebkitLineClamp | undefined;
  "-webkit-margin-end"?: Property.MarginInlineEnd<TLength> | undefined;
  "-webkit-margin-start"?: Property.MarginInlineStart<TLength> | undefined;
  "-webkit-mask-attachment"?: Property.WebkitMaskAttachment | undefined;
  "-webkit-mask-box-image-outset"?: Property.MaskBorderOutset<TLength> | undefined;
  "-webkit-mask-box-image-repeat"?: Property.MaskBorderRepeat | undefined;
  "-webkit-mask-box-image-slice"?: Property.MaskBorderSlice | undefined;
  "-webkit-mask-box-image-source"?: Property.MaskBorderSource | undefined;
  "-webkit-mask-box-image-width"?: Property.MaskBorderWidth<TLength> | undefined;
  "-webkit-mask-clip"?: Property.WebkitMaskClip | undefined;
  "-webkit-mask-composite"?: Property.WebkitMaskComposite | undefined;
  "-webkit-mask-image"?: Property.WebkitMaskImage | undefined;
  "-webkit-mask-origin"?: Property.WebkitMaskOrigin | undefined;
  "-webkit-mask-position"?: Property.WebkitMaskPosition<TLength> | undefined;
  "-webkit-mask-position-x"?: Property.WebkitMaskPositionX<TLength> | undefined;
  "-webkit-mask-position-y"?: Property.WebkitMaskPositionY<TLength> | undefined;
  "-webkit-mask-repeat"?: Property.WebkitMaskRepeat | undefined;
  "-webkit-mask-repeat-x"?: Property.WebkitMaskRepeatX | undefined;
  "-webkit-mask-repeat-y"?: Property.WebkitMaskRepeatY | undefined;
  "-webkit-mask-size"?: Property.WebkitMaskSize<TLength> | undefined;
  "-webkit-max-inline-size"?: Property.MaxInlineSize<TLength> | undefined;
  "-webkit-order"?: Property.Order | undefined;
  "-webkit-overflow-scrolling"?: Property.WebkitOverflowScrolling | undefined;
  "-webkit-padding-end"?: Property.PaddingInlineEnd<TLength> | undefined;
  "-webkit-padding-start"?: Property.PaddingInlineStart<TLength> | undefined;
  "-webkit-perspective"?: Property.Perspective<TLength> | undefined;
  "-webkit-perspective-origin"?: Property.PerspectiveOrigin<TLength> | undefined;
  "-webkit-print-color-adjust"?: Property.PrintColorAdjust | undefined;
  "-webkit-ruby-position"?: Property.RubyPosition | undefined;
  "-webkit-scroll-snap-type"?: Property.ScrollSnapType | undefined;
  "-webkit-shape-margin"?: Property.ShapeMargin<TLength> | undefined;
  "-webkit-tap-highlight-color"?: Property.WebkitTapHighlightColor | undefined;
  "-webkit-text-combine"?: Property.TextCombineUpright | undefined;
  "-webkit-text-decoration-color"?: Property.TextDecorationColor | undefined;
  "-webkit-text-decoration-line"?: Property.TextDecorationLine | undefined;
  "-webkit-text-decoration-skip"?: Property.TextDecorationSkip | undefined;
  "-webkit-text-decoration-style"?: Property.TextDecorationStyle | undefined;
  "-webkit-text-emphasis-color"?: Property.TextEmphasisColor | undefined;
  "-webkit-text-emphasis-position"?: Property.TextEmphasisPosition | undefined;
  "-webkit-text-emphasis-style"?: Property.TextEmphasisStyle | undefined;
  "-webkit-text-fill-color"?: Property.WebkitTextFillColor | undefined;
  "-webkit-text-orientation"?: Property.TextOrientation | undefined;
  "-webkit-text-size-adjust"?: Property.TextSizeAdjust | undefined;
  "-webkit-text-stroke-color"?: Property.WebkitTextStrokeColor | undefined;
  "-webkit-text-stroke-width"?: Property.WebkitTextStrokeWidth<TLength> | undefined;
  "-webkit-text-underline-position"?: Property.TextUnderlinePosition | undefined;
  "-webkit-touch-callout"?: Property.WebkitTouchCallout | undefined;
  "-webkit-transform"?: Property.Transform | undefined;
  "-webkit-transform-origin"?: Property.TransformOrigin<TLength> | undefined;
  "-webkit-transform-style"?: Property.TransformStyle | undefined;
  "-webkit-transition-delay"?: Property.TransitionDelay<TTime> | undefined;
  "-webkit-transition-duration"?: Property.TransitionDuration<TTime> | undefined;
  "-webkit-transition-property"?: Property.TransitionProperty | undefined;
  "-webkit-transition-timing-function"?: Property.TransitionTimingFunction | undefined;
  "-webkit-user-modify"?: Property.WebkitUserModify | undefined;
  "-webkit-user-select"?: Property.UserSelect | undefined;
  "-webkit-writing-mode"?: Property.WritingMode | undefined;
}
interface VendorShorthandPropertiesHyphen<TLength = (string & {}) | 0, TTime = string & {}> {
  "-moz-animation"?: Property.Animation<TTime> | undefined;
  "-moz-border-image"?: Property.BorderImage | undefined;
  "-moz-column-rule"?: Property.ColumnRule<TLength> | undefined;
  "-moz-columns"?: Property.Columns<TLength> | undefined;
  "-moz-transition"?: Property.Transition<TTime> | undefined;
  "-ms-content-zoom-limit"?: Property.MsContentZoomLimit | undefined;
  "-ms-content-zoom-snap"?: Property.MsContentZoomSnap | undefined;
  "-ms-flex"?: Property.Flex<TLength> | undefined;
  "-ms-scroll-limit"?: Property.MsScrollLimit | undefined;
  "-ms-scroll-snap-x"?: Property.MsScrollSnapX | undefined;
  "-ms-scroll-snap-y"?: Property.MsScrollSnapY | undefined;
  "-ms-transition"?: Property.Transition<TTime> | undefined;
  "-webkit-animation"?: Property.Animation<TTime> | undefined;
  "-webkit-border-before"?: Property.WebkitBorderBefore<TLength> | undefined;
  "-webkit-border-image"?: Property.BorderImage | undefined;
  "-webkit-border-radius"?: Property.BorderRadius<TLength> | undefined;
  "-webkit-column-rule"?: Property.ColumnRule<TLength> | undefined;
  "-webkit-columns"?: Property.Columns<TLength> | undefined;
  "-webkit-flex"?: Property.Flex<TLength> | undefined;
  "-webkit-flex-flow"?: Property.FlexFlow | undefined;
  "-webkit-mask"?: Property.WebkitMask<TLength> | undefined;
  "-webkit-mask-box-image"?: Property.MaskBorder | undefined;
  "-webkit-text-emphasis"?: Property.TextEmphasis | undefined;
  "-webkit-text-stroke"?: Property.WebkitTextStroke<TLength> | undefined;
  "-webkit-transition"?: Property.Transition<TTime> | undefined;
}
interface VendorPropertiesHyphen<TLength = (string & {}) | 0, TTime = string & {}>
  extends VendorLonghandPropertiesHyphen<TLength, TTime>,
    VendorShorthandPropertiesHyphen<TLength, TTime> {}
interface ObsoletePropertiesHyphen<TLength = (string & {}) | 0, TTime = string & {}> {
  azimuth?: Property.Azimuth | undefined;
  "box-align"?: Property.BoxAlign | undefined;
  "box-direction"?: Property.BoxDirection | undefined;
  "box-flex"?: Property.BoxFlex | undefined;
  "box-flex-group"?: Property.BoxFlexGroup | undefined;
  "box-lines"?: Property.BoxLines | undefined;
  "box-ordinal-group"?: Property.BoxOrdinalGroup | undefined;
  "box-orient"?: Property.BoxOrient | undefined;
  "box-pack"?: Property.BoxPack | undefined;
  clip?: Property.Clip | undefined;
  "grid-column-gap"?: Property.GridColumnGap<TLength> | undefined;
  "grid-gap"?: Property.GridGap<TLength> | undefined;
  "grid-row-gap"?: Property.GridRowGap<TLength> | undefined;
  "ime-mode"?: Property.ImeMode | undefined;
  "offset-block"?: Property.InsetBlock<TLength> | undefined;
  "offset-block-end"?: Property.InsetBlockEnd<TLength> | undefined;
  "offset-block-start"?: Property.InsetBlockStart<TLength> | undefined;
  "offset-inline"?: Property.InsetInline<TLength> | undefined;
  "offset-inline-end"?: Property.InsetInlineEnd<TLength> | undefined;
  "offset-inline-start"?: Property.InsetInlineStart<TLength> | undefined;
  "scroll-snap-coordinate"?: Property.ScrollSnapCoordinate<TLength> | undefined;
  "scroll-snap-destination"?: Property.ScrollSnapDestination<TLength> | undefined;
  "scroll-snap-points-x"?: Property.ScrollSnapPointsX | undefined;
  "scroll-snap-points-y"?: Property.ScrollSnapPointsY | undefined;
  "scroll-snap-type-x"?: Property.ScrollSnapTypeX | undefined;
  "scroll-snap-type-y"?: Property.ScrollSnapTypeY | undefined;
  "-khtml-box-align"?: Property.BoxAlign | undefined;
  "-khtml-box-direction"?: Property.BoxDirection | undefined;
  "-khtml-box-flex"?: Property.BoxFlex | undefined;
  "-khtml-box-flex-group"?: Property.BoxFlexGroup | undefined;
  "-khtml-box-lines"?: Property.BoxLines | undefined;
  "-khtml-box-ordinal-group"?: Property.BoxOrdinalGroup | undefined;
  "-khtml-box-orient"?: Property.BoxOrient | undefined;
  "-khtml-box-pack"?: Property.BoxPack | undefined;
  "-khtml-line-break"?: Property.LineBreak | undefined;
  "-khtml-opacity"?: Property.Opacity | undefined;
  "-khtml-user-select"?: Property.UserSelect | undefined;
  "-moz-background-clip"?: Property.BackgroundClip | undefined;
  "-moz-background-inline-policy"?: Property.BoxDecorationBreak | undefined;
  "-moz-background-origin"?: Property.BackgroundOrigin | undefined;
  "-moz-background-size"?: Property.BackgroundSize<TLength> | undefined;
  "-moz-binding"?: Property.MozBinding | undefined;
  "-moz-border-radius"?: Property.BorderRadius<TLength> | undefined;
  "-moz-border-radius-bottomleft"?: Property.BorderBottomLeftRadius<TLength> | undefined;
  "-moz-border-radius-bottomright"?: Property.BorderBottomRightRadius<TLength> | undefined;
  "-moz-border-radius-topleft"?: Property.BorderTopLeftRadius<TLength> | undefined;
  "-moz-border-radius-topright"?: Property.BorderTopRightRadius<TLength> | undefined;
  "-moz-box-align"?: Property.BoxAlign | undefined;
  "-moz-box-direction"?: Property.BoxDirection | undefined;
  "-moz-box-flex"?: Property.BoxFlex | undefined;
  "-moz-box-ordinal-group"?: Property.BoxOrdinalGroup | undefined;
  "-moz-box-orient"?: Property.BoxOrient | undefined;
  "-moz-box-pack"?: Property.BoxPack | undefined;
  "-moz-box-shadow"?: Property.BoxShadow | undefined;
  "-moz-float-edge"?: Property.MozFloatEdge | undefined;
  "-moz-force-broken-image-icon"?: Property.MozForceBrokenImageIcon | undefined;
  "-moz-opacity"?: Property.Opacity | undefined;
  "-moz-outline"?: Property.Outline<TLength> | undefined;
  "-moz-outline-color"?: Property.OutlineColor | undefined;
  "-moz-outline-radius"?: Property.MozOutlineRadius<TLength> | undefined;
  "-moz-outline-radius-bottomleft"?: Property.MozOutlineRadiusBottomleft<TLength> | undefined;
  "-moz-outline-radius-bottomright"?: Property.MozOutlineRadiusBottomright<TLength> | undefined;
  "-moz-outline-radius-topleft"?: Property.MozOutlineRadiusTopleft<TLength> | undefined;
  "-moz-outline-radius-topright"?: Property.MozOutlineRadiusTopright<TLength> | undefined;
  "-moz-outline-style"?: Property.OutlineStyle | undefined;
  "-moz-outline-width"?: Property.OutlineWidth<TLength> | undefined;
  "-moz-text-align-last"?: Property.TextAlignLast | undefined;
  "-moz-text-decoration-color"?: Property.TextDecorationColor | undefined;
  "-moz-text-decoration-line"?: Property.TextDecorationLine | undefined;
  "-moz-text-decoration-style"?: Property.TextDecorationStyle | undefined;
  "-moz-user-input"?: Property.MozUserInput | undefined;
  "-ms-ime-mode"?: Property.ImeMode | undefined;
  "-o-animation"?: Property.Animation<TTime> | undefined;
  "-o-animation-delay"?: Property.AnimationDelay<TTime> | undefined;
  "-o-animation-direction"?: Property.AnimationDirection | undefined;
  "-o-animation-duration"?: Property.AnimationDuration<TTime> | undefined;
  "-o-animation-fill-mode"?: Property.AnimationFillMode | undefined;
  "-o-animation-iteration-count"?: Property.AnimationIterationCount | undefined;
  "-o-animation-name"?: Property.AnimationName | undefined;
  "-o-animation-play-state"?: Property.AnimationPlayState | undefined;
  "-o-animation-timing-function"?: Property.AnimationTimingFunction | undefined;
  "-o-background-size"?: Property.BackgroundSize<TLength> | undefined;
  "-o-border-image"?: Property.BorderImage | undefined;
  "-o-object-fit"?: Property.ObjectFit | undefined;
  "-o-object-position"?: Property.ObjectPosition<TLength> | undefined;
  "-o-tab-size"?: Property.TabSize<TLength> | undefined;
  "-o-text-overflow"?: Property.TextOverflow | undefined;
  "-o-transform"?: Property.Transform | undefined;
  "-o-transform-origin"?: Property.TransformOrigin<TLength> | undefined;
  "-o-transition"?: Property.Transition<TTime> | undefined;
  "-o-transition-delay"?: Property.TransitionDelay<TTime> | undefined;
  "-o-transition-duration"?: Property.TransitionDuration<TTime> | undefined;
  "-o-transition-property"?: Property.TransitionProperty | undefined;
  "-o-transition-timing-function"?: Property.TransitionTimingFunction | undefined;
  "-webkit-box-align"?: Property.BoxAlign | undefined;
  "-webkit-box-direction"?: Property.BoxDirection | undefined;
  "-webkit-box-flex"?: Property.BoxFlex | undefined;
  "-webkit-box-flex-group"?: Property.BoxFlexGroup | undefined;
  "-webkit-box-lines"?: Property.BoxLines | undefined;
  "-webkit-box-ordinal-group"?: Property.BoxOrdinalGroup | undefined;
  "-webkit-box-orient"?: Property.BoxOrient | undefined;
  "-webkit-box-pack"?: Property.BoxPack | undefined;
  "-webkit-scroll-snap-points-x"?: Property.ScrollSnapPointsX | undefined;
  "-webkit-scroll-snap-points-y"?: Property.ScrollSnapPointsY | undefined;
}
interface SvgPropertiesHyphen<TLength = (string & {}) | 0, TTime = string & {}> {
  "alignment-baseline"?: Property.AlignmentBaseline | undefined;
  "baseline-shift"?: Property.BaselineShift<TLength> | undefined;
  clip?: Property.Clip | undefined;
  "clip-path"?: Property.ClipPath | undefined;
  "clip-rule"?: Property.ClipRule | undefined;
  color?: Property.Color | undefined;
  "color-interpolation"?: Property.ColorInterpolation | undefined;
  "color-rendering"?: Property.ColorRendering | undefined;
  cursor?: Property.Cursor | undefined;
  direction?: Property.Direction | undefined;
  display?: Property.Display | undefined;
  "dominant-baseline"?: Property.DominantBaseline | undefined;
  fill?: Property.Fill | undefined;
  "fill-opacity"?: Property.FillOpacity | undefined;
  "fill-rule"?: Property.FillRule | undefined;
  filter?: Property.Filter | undefined;
  "flood-color"?: Property.FloodColor | undefined;
  "flood-opacity"?: Property.FloodOpacity | undefined;
  font?: Property.Font | undefined;
  "font-family"?: Property.FontFamily | undefined;
  "font-size"?: Property.FontSize<TLength> | undefined;
  "font-size-adjust"?: Property.FontSizeAdjust | undefined;
  "font-stretch"?: Property.FontStretch | undefined;
  "font-style"?: Property.FontStyle | undefined;
  "font-variant"?: Property.FontVariant | undefined;
  "font-weight"?: Property.FontWeight | undefined;
  "glyph-orientation-vertical"?: Property.GlyphOrientationVertical | undefined;
  "image-rendering"?: Property.ImageRendering | undefined;
  "letter-spacing"?: Property.LetterSpacing<TLength> | undefined;
  "lighting-color"?: Property.LightingColor | undefined;
  "line-height"?: Property.LineHeight<TLength> | undefined;
  marker?: Property.Marker | undefined;
  "marker-end"?: Property.MarkerEnd | undefined;
  "marker-mid"?: Property.MarkerMid | undefined;
  "marker-start"?: Property.MarkerStart | undefined;
  mask?: Property.Mask<TLength> | undefined;
  opacity?: Property.Opacity | undefined;
  overflow?: Property.Overflow | undefined;
  "paint-order"?: Property.PaintOrder | undefined;
  "pointer-events"?: Property.PointerEvents | undefined;
  "shape-rendering"?: Property.ShapeRendering | undefined;
  "stop-color"?: Property.StopColor | undefined;
  "stop-opacity"?: Property.StopOpacity | undefined;
  stroke?: Property.Stroke | undefined;
  "stroke-dasharray"?: Property.StrokeDasharray<TLength> | undefined;
  "stroke-dashoffset"?: Property.StrokeDashoffset<TLength> | undefined;
  "stroke-linecap"?: Property.StrokeLinecap | undefined;
  "stroke-linejoin"?: Property.StrokeLinejoin | undefined;
  "stroke-miterlimit"?: Property.StrokeMiterlimit | undefined;
  "stroke-opacity"?: Property.StrokeOpacity | undefined;
  "stroke-width"?: Property.StrokeWidth<TLength> | undefined;
  "text-anchor"?: Property.TextAnchor | undefined;
  "text-decoration"?: Property.TextDecoration<TLength> | undefined;
  "text-rendering"?: Property.TextRendering | undefined;
  "unicode-bidi"?: Property.UnicodeBidi | undefined;
  "vector-effect"?: Property.VectorEffect | undefined;
  visibility?: Property.Visibility | undefined;
  "white-space"?: Property.WhiteSpace | undefined;
  "word-spacing"?: Property.WordSpacing<TLength> | undefined;
  "writing-mode"?: Property.WritingMode | undefined;
}
interface PropertiesHyphen<TLength = (string & {}) | 0, TTime = string & {}>
  extends StandardPropertiesHyphen<TLength, TTime>,
    VendorPropertiesHyphen<TLength, TTime>,
    ObsoletePropertiesHyphen<TLength, TTime>,
    SvgPropertiesHyphen<TLength, TTime> {}
type Globals = "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset";
declare namespace Property {
  export type AccentColor = Globals | DataType.Color | "auto";
  export type AlignContent = Globals | DataType.ContentDistribution | DataType.ContentPosition | "baseline" | "normal" | (string & {});
  export type AlignItems = Globals | DataType.SelfPosition | "baseline" | "normal" | "stretch" | (string & {});
  export type AlignSelf = Globals | DataType.SelfPosition | "auto" | "baseline" | "normal" | "stretch" | (string & {});
  export type AlignTracks = Globals | DataType.ContentDistribution | DataType.ContentPosition | "baseline" | "normal" | (string & {});
  export type All = Globals;
  export type Animation<TTime = string & {}> = Globals | DataType.SingleAnimation<TTime> | (string & {});
  export type AnimationComposition = Globals | (string & {});
  export type AnimationDelay<TTime = string & {}> = Globals | TTime | (string & {});
  export type AnimationDirection = Globals | DataType.SingleAnimationDirection | (string & {});
  export type AnimationDuration<TTime = string & {}> = Globals | TTime | (string & {});
  export type AnimationFillMode = Globals | DataType.SingleAnimationFillMode | (string & {});
  export type AnimationIterationCount = Globals | "infinite" | (string & {}) | (number & {});
  export type AnimationName = Globals | "none" | (string & {});
  export type AnimationPlayState = Globals | "paused" | "running" | (string & {});
  export type AnimationTimeline = Globals | DataType.SingleAnimationTimeline | (string & {});
  export type AnimationTimingFunction = Globals | DataType.EasingFunction | (string & {});
  export type Appearance = Globals | DataType.CompatAuto | "auto" | "menulist-button" | "none" | "textfield";
  export type AspectRatio = Globals | "auto" | (string & {}) | (number & {});
  export type Azimuth =
    | Globals
    | "behind"
    | "center"
    | "center-left"
    | "center-right"
    | "far-left"
    | "far-right"
    | "left"
    | "left-side"
    | "leftwards"
    | "right"
    | "right-side"
    | "rightwards"
    | (string & {});
  export type BackdropFilter = Globals | "none" | (string & {});
  export type BackfaceVisibility = Globals | "hidden" | "visible";
  export type Background<TLength = (string & {}) | 0> = Globals | DataType.FinalBgLayer<TLength> | (string & {});
  export type BackgroundAttachment = Globals | DataType.Attachment | (string & {});
  export type BackgroundBlendMode = Globals | DataType.BlendMode | (string & {});
  export type BackgroundClip = Globals | DataType.Box | (string & {});
  export type BackgroundColor = Globals | DataType.Color;
  export type BackgroundImage = Globals | "none" | (string & {});
  export type BackgroundOrigin = Globals | DataType.Box | (string & {});
  export type BackgroundPosition<TLength = (string & {}) | 0> = Globals | DataType.BgPosition<TLength> | (string & {});
  export type BackgroundPositionX<TLength = (string & {}) | 0> = Globals | TLength | "center" | "left" | "right" | "x-end" | "x-start" | (string & {});
  export type BackgroundPositionY<TLength = (string & {}) | 0> = Globals | TLength | "bottom" | "center" | "top" | "y-end" | "y-start" | (string & {});
  export type BackgroundRepeat = Globals | DataType.RepeatStyle | (string & {});
  export type BackgroundSize<TLength = (string & {}) | 0> = Globals | DataType.BgSize<TLength> | (string & {});
  export type BlockOverflow = Globals | "clip" | "ellipsis" | (string & {});
  export type BlockSize<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-fit-content"
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fill-available"
    | "auto"
    | "fit-content"
    | "max-content"
    | "min-content"
    | (string & {});
  export type Border<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});
  export type BorderBlock<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});
  export type BorderBlockColor = Globals | DataType.Color | (string & {});
  export type BorderBlockEnd<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});
  export type BorderBlockEndColor = Globals | DataType.Color;
  export type BorderBlockEndStyle = Globals | DataType.LineStyle;
  export type BorderBlockEndWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;
  export type BorderBlockStart<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});
  export type BorderBlockStartColor = Globals | DataType.Color;
  export type BorderBlockStartStyle = Globals | DataType.LineStyle;
  export type BorderBlockStartWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;
  export type BorderBlockStyle = Globals | DataType.LineStyle;
  export type BorderBlockWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;
  export type BorderBottom<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});
  export type BorderBottomColor = Globals | DataType.Color;
  export type BorderBottomLeftRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type BorderBottomRightRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type BorderBottomStyle = Globals | DataType.LineStyle;
  export type BorderBottomWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;
  export type BorderCollapse = Globals | "collapse" | "separate";
  export type BorderColor = Globals | DataType.Color | (string & {});
  export type BorderEndEndRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type BorderEndStartRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type BorderImage = Globals | "none" | "repeat" | "round" | "space" | "stretch" | (string & {}) | (number & {});
  export type BorderImageOutset<TLength = (string & {}) | 0> = Globals | TLength | (string & {}) | (number & {});
  export type BorderImageRepeat = Globals | "repeat" | "round" | "space" | "stretch" | (string & {});
  export type BorderImageSlice = Globals | (string & {}) | (number & {});
  export type BorderImageSource = Globals | "none" | (string & {});
  export type BorderImageWidth<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {}) | (number & {});
  export type BorderInline<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});
  export type BorderInlineColor = Globals | DataType.Color | (string & {});
  export type BorderInlineEnd<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});
  export type BorderInlineEndColor = Globals | DataType.Color;
  export type BorderInlineEndStyle = Globals | DataType.LineStyle;
  export type BorderInlineEndWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;
  export type BorderInlineStart<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});
  export type BorderInlineStartColor = Globals | DataType.Color;
  export type BorderInlineStartStyle = Globals | DataType.LineStyle;
  export type BorderInlineStartWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;
  export type BorderInlineStyle = Globals | DataType.LineStyle;
  export type BorderInlineWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;
  export type BorderLeft<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});
  export type BorderLeftColor = Globals | DataType.Color;
  export type BorderLeftStyle = Globals | DataType.LineStyle;
  export type BorderLeftWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;
  export type BorderRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type BorderRight<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});
  export type BorderRightColor = Globals | DataType.Color;
  export type BorderRightStyle = Globals | DataType.LineStyle;
  export type BorderRightWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;
  export type BorderSpacing<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type BorderStartEndRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type BorderStartStartRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type BorderStyle = Globals | DataType.LineStyle | (string & {});
  export type BorderTop<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});
  export type BorderTopColor = Globals | DataType.Color;
  export type BorderTopLeftRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type BorderTopRightRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type BorderTopStyle = Globals | DataType.LineStyle;
  export type BorderTopWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;
  export type BorderWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | (string & {});
  export type Bottom<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type BoxAlign = Globals | "baseline" | "center" | "end" | "start" | "stretch";
  export type BoxDecorationBreak = Globals | "clone" | "slice";
  export type BoxDirection = Globals | "inherit" | "normal" | "reverse";
  export type BoxFlex = Globals | (number & {}) | (string & {});
  export type BoxFlexGroup = Globals | (number & {}) | (string & {});
  export type BoxLines = Globals | "multiple" | "single";
  export type BoxOrdinalGroup = Globals | (number & {}) | (string & {});
  export type BoxOrient = Globals | "block-axis" | "horizontal" | "inherit" | "inline-axis" | "vertical";
  export type BoxPack = Globals | "center" | "end" | "justify" | "start";
  export type BoxShadow = Globals | "none" | (string & {});
  export type BoxSizing = Globals | "border-box" | "content-box";
  export type BreakAfter =
    | Globals
    | "all"
    | "always"
    | "auto"
    | "avoid"
    | "avoid-column"
    | "avoid-page"
    | "avoid-region"
    | "column"
    | "left"
    | "page"
    | "recto"
    | "region"
    | "right"
    | "verso";
  export type BreakBefore =
    | Globals
    | "all"
    | "always"
    | "auto"
    | "avoid"
    | "avoid-column"
    | "avoid-page"
    | "avoid-region"
    | "column"
    | "left"
    | "page"
    | "recto"
    | "region"
    | "right"
    | "verso";
  export type BreakInside = Globals | "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region";
  export type CaptionSide = Globals | "block-end" | "block-start" | "bottom" | "inline-end" | "inline-start" | "top";
  export type CaretColor = Globals | DataType.Color | "auto";
  export type Clear = Globals | "both" | "inline-end" | "inline-start" | "left" | "none" | "right";
  export type Clip = Globals | "auto" | (string & {});
  export type ClipPath = Globals | DataType.GeometryBox | "none" | (string & {});
  export type Color = Globals | DataType.Color;
  export type PrintColorAdjust = Globals | "economy" | "exact";
  export type ColorScheme = Globals | "dark" | "light" | "normal" | (string & {});
  export type ColumnCount = Globals | "auto" | (number & {}) | (string & {});
  export type ColumnFill = Globals | "auto" | "balance" | "balance-all";
  export type ColumnGap<TLength = (string & {}) | 0> = Globals | TLength | "normal" | (string & {});
  export type ColumnRule<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});
  export type ColumnRuleColor = Globals | DataType.Color;
  export type ColumnRuleStyle = Globals | DataType.LineStyle | (string & {});
  export type ColumnRuleWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | (string & {});
  export type ColumnSpan = Globals | "all" | "none";
  export type ColumnWidth<TLength = (string & {}) | 0> = Globals | TLength | "auto";
  export type Columns<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {}) | (number & {});
  export type Contain = Globals | "content" | "inline-size" | "layout" | "none" | "paint" | "size" | "strict" | "style" | (string & {});
  export type Content = Globals | DataType.ContentList | "none" | "normal" | (string & {});
  export type ContentVisibility = Globals | "auto" | "hidden" | "visible";
  export type CounterIncrement = Globals | "none" | (string & {});
  export type CounterReset = Globals | "none" | (string & {});
  export type CounterSet = Globals | "none" | (string & {});
  export type Cursor =
    | Globals
    | "-moz-grab"
    | "-webkit-grab"
    | "alias"
    | "all-scroll"
    | "auto"
    | "cell"
    | "col-resize"
    | "context-menu"
    | "copy"
    | "crosshair"
    | "default"
    | "e-resize"
    | "ew-resize"
    | "grab"
    | "grabbing"
    | "help"
    | "move"
    | "n-resize"
    | "ne-resize"
    | "nesw-resize"
    | "no-drop"
    | "none"
    | "not-allowed"
    | "ns-resize"
    | "nw-resize"
    | "nwse-resize"
    | "pointer"
    | "progress"
    | "row-resize"
    | "s-resize"
    | "se-resize"
    | "sw-resize"
    | "text"
    | "vertical-text"
    | "w-resize"
    | "wait"
    | "zoom-in"
    | "zoom-out"
    | (string & {});
  export type Direction = Globals | "ltr" | "rtl";
  export type Display =
    | Globals
    | DataType.DisplayOutside
    | DataType.DisplayInside
    | DataType.DisplayInternal
    | DataType.DisplayLegacy
    | "contents"
    | "list-item"
    | "none"
    | (string & {});
  export type EmptyCells = Globals | "hide" | "show";
  export type Filter = Globals | "none" | (string & {});
  export type Flex<TLength = (string & {}) | 0> = Globals | TLength | "auto" | "content" | "fit-content" | "max-content" | "min-content" | "none" | (string & {}) | (number & {});
  export type FlexBasis<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-fit-content"
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-auto"
    | "auto"
    | "content"
    | "fit-content"
    | "max-content"
    | "min-content"
    | (string & {});
  export type FlexDirection = Globals | "column" | "column-reverse" | "row" | "row-reverse";
  export type FlexFlow = Globals | "column" | "column-reverse" | "nowrap" | "row" | "row-reverse" | "wrap" | "wrap-reverse" | (string & {});
  export type FlexGrow = Globals | (number & {}) | (string & {});
  export type FlexShrink = Globals | (number & {}) | (string & {});
  export type FlexWrap = Globals | "nowrap" | "wrap" | "wrap-reverse";
  export type Float = Globals | "inline-end" | "inline-start" | "left" | "none" | "right";
  export type Font = Globals | "caption" | "icon" | "menu" | "message-box" | "small-caption" | "status-bar" | (string & {});
  export type FontFamily = Globals | DataType.GenericFamily | (string & {});
  export type FontFeatureSettings = Globals | "normal" | (string & {});
  export type FontKerning = Globals | "auto" | "none" | "normal";
  export type FontLanguageOverride = Globals | "normal" | (string & {});
  export type FontOpticalSizing = Globals | "auto" | "none";
  export type FontSize<TLength = (string & {}) | 0> = Globals | DataType.AbsoluteSize | TLength | "larger" | "smaller" | (string & {});
  export type FontSizeAdjust = Globals | "from-font" | "none" | (string & {}) | (number & {});
  export type FontSmooth<TLength = (string & {}) | 0> = Globals | DataType.AbsoluteSize | TLength | "always" | "auto" | "never";
  export type FontStretch = Globals | DataType.FontStretchAbsolute;
  export type FontStyle = Globals | "italic" | "normal" | "oblique" | (string & {});
  export type FontSynthesis = Globals | "none" | "small-caps" | "style" | "weight" | (string & {});
  export type FontVariant =
    | Globals
    | DataType.EastAsianVariantValues
    | "all-petite-caps"
    | "all-small-caps"
    | "common-ligatures"
    | "contextual"
    | "diagonal-fractions"
    | "discretionary-ligatures"
    | "full-width"
    | "historical-forms"
    | "historical-ligatures"
    | "lining-nums"
    | "no-common-ligatures"
    | "no-contextual"
    | "no-discretionary-ligatures"
    | "no-historical-ligatures"
    | "none"
    | "normal"
    | "oldstyle-nums"
    | "ordinal"
    | "petite-caps"
    | "proportional-nums"
    | "proportional-width"
    | "ruby"
    | "slashed-zero"
    | "small-caps"
    | "stacked-fractions"
    | "tabular-nums"
    | "titling-caps"
    | "unicase"
    | (string & {});
  export type FontVariantAlternates = Globals | "historical-forms" | "normal" | (string & {});
  export type FontVariantCaps = Globals | "all-petite-caps" | "all-small-caps" | "normal" | "petite-caps" | "small-caps" | "titling-caps" | "unicase";
  export type FontVariantEastAsian = Globals | DataType.EastAsianVariantValues | "full-width" | "normal" | "proportional-width" | "ruby" | (string & {});
  export type FontVariantLigatures =
    | Globals
    | "common-ligatures"
    | "contextual"
    | "discretionary-ligatures"
    | "historical-ligatures"
    | "no-common-ligatures"
    | "no-contextual"
    | "no-discretionary-ligatures"
    | "no-historical-ligatures"
    | "none"
    | "normal"
    | (string & {});
  export type FontVariantNumeric =
    | Globals
    | "diagonal-fractions"
    | "lining-nums"
    | "normal"
    | "oldstyle-nums"
    | "ordinal"
    | "proportional-nums"
    | "slashed-zero"
    | "stacked-fractions"
    | "tabular-nums"
    | (string & {});
  export type FontVariantPosition = Globals | "normal" | "sub" | "super";
  export type FontVariationSettings = Globals | "normal" | (string & {});
  export type FontWeight = Globals | DataType.FontWeightAbsolute | "bolder" | "lighter";
  export type ForcedColorAdjust = Globals | "auto" | "none";
  export type Gap<TLength = (string & {}) | 0> = Globals | TLength | "normal" | (string & {});
  export type Grid = Globals | "none" | (string & {});
  export type GridArea = Globals | DataType.GridLine | (string & {});
  export type GridAutoColumns<TLength = (string & {}) | 0> = Globals | DataType.TrackBreadth<TLength> | (string & {});
  export type GridAutoFlow = Globals | "column" | "dense" | "row" | (string & {});
  export type GridAutoRows<TLength = (string & {}) | 0> = Globals | DataType.TrackBreadth<TLength> | (string & {});
  export type GridColumn = Globals | DataType.GridLine | (string & {});
  export type GridColumnEnd = Globals | DataType.GridLine;
  export type GridColumnGap<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type GridColumnStart = Globals | DataType.GridLine;
  export type GridGap<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type GridRow = Globals | DataType.GridLine | (string & {});
  export type GridRowEnd = Globals | DataType.GridLine;
  export type GridRowGap<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type GridRowStart = Globals | DataType.GridLine;
  export type GridTemplate = Globals | "none" | (string & {});
  export type GridTemplateAreas = Globals | "none" | (string & {});
  export type GridTemplateColumns<TLength = (string & {}) | 0> = Globals | DataType.TrackBreadth<TLength> | "none" | "subgrid" | (string & {});
  export type GridTemplateRows<TLength = (string & {}) | 0> = Globals | DataType.TrackBreadth<TLength> | "none" | "subgrid" | (string & {});
  export type HangingPunctuation = Globals | "allow-end" | "first" | "force-end" | "last" | "none" | (string & {});
  export type Height<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fit-content"
    | "auto"
    | "fit-content"
    | "max-content"
    | "min-content"
    | (string & {});
  export type HyphenateCharacter = Globals | "auto" | (string & {});
  export type Hyphens = Globals | "auto" | "manual" | "none";
  export type ImageOrientation = Globals | "flip" | "from-image" | (string & {});
  export type ImageRendering = Globals | "-moz-crisp-edges" | "-webkit-optimize-contrast" | "auto" | "crisp-edges" | "pixelated";
  export type ImageResolution = Globals | "from-image" | (string & {});
  export type ImeMode = Globals | "active" | "auto" | "disabled" | "inactive" | "normal";
  export type InitialLetter = Globals | "normal" | (string & {}) | (number & {});
  export type InlineSize<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-fit-content"
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fill-available"
    | "auto"
    | "fit-content"
    | "max-content"
    | "min-content"
    | (string & {});
  export type InputSecurity = Globals | "auto" | "none";
  export type Inset<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type InsetBlock<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type InsetBlockEnd<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type InsetBlockStart<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type InsetInline<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type InsetInlineEnd<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type InsetInlineStart<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type Isolation = Globals | "auto" | "isolate";
  export type JustifyContent = Globals | DataType.ContentDistribution | DataType.ContentPosition | "left" | "normal" | "right" | (string & {});
  export type JustifyItems = Globals | DataType.SelfPosition | "baseline" | "left" | "legacy" | "normal" | "right" | "stretch" | (string & {});
  export type JustifySelf = Globals | DataType.SelfPosition | "auto" | "baseline" | "left" | "normal" | "right" | "stretch" | (string & {});
  export type JustifyTracks = Globals | DataType.ContentDistribution | DataType.ContentPosition | "left" | "normal" | "right" | (string & {});
  export type Left<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type LetterSpacing<TLength = (string & {}) | 0> = Globals | TLength | "normal";
  export type LineBreak = Globals | "anywhere" | "auto" | "loose" | "normal" | "strict";
  export type LineClamp = Globals | "none" | (number & {}) | (string & {});
  export type LineHeight<TLength = (string & {}) | 0> = Globals | TLength | "normal" | (string & {}) | (number & {});
  export type LineHeightStep<TLength = (string & {}) | 0> = Globals | TLength;
  export type ListStyle = Globals | "inside" | "none" | "outside" | (string & {});
  export type ListStyleImage = Globals | "none" | (string & {});
  export type ListStylePosition = Globals | "inside" | "outside";
  export type ListStyleType = Globals | "none" | (string & {});
  export type Margin<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type MarginBlock<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type MarginBlockEnd<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type MarginBlockStart<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type MarginBottom<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type MarginInline<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type MarginInlineEnd<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type MarginInlineStart<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type MarginLeft<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type MarginRight<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type MarginTop<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type Mask<TLength = (string & {}) | 0> = Globals | DataType.MaskLayer<TLength> | (string & {});
  export type MaskBorder = Globals | "alpha" | "luminance" | "none" | "repeat" | "round" | "space" | "stretch" | (string & {}) | (number & {});
  export type MaskBorderMode = Globals | "alpha" | "luminance";
  export type MaskBorderOutset<TLength = (string & {}) | 0> = Globals | TLength | (string & {}) | (number & {});
  export type MaskBorderRepeat = Globals | "repeat" | "round" | "space" | "stretch" | (string & {});
  export type MaskBorderSlice = Globals | (string & {}) | (number & {});
  export type MaskBorderSource = Globals | "none" | (string & {});
  export type MaskBorderWidth<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {}) | (number & {});
  export type MaskClip = Globals | DataType.GeometryBox | "no-clip" | (string & {});
  export type MaskComposite = Globals | DataType.CompositingOperator | (string & {});
  export type MaskImage = Globals | "none" | (string & {});
  export type MaskMode = Globals | DataType.MaskingMode | (string & {});
  export type MaskOrigin = Globals | DataType.GeometryBox | (string & {});
  export type MaskPosition<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength> | (string & {});
  export type MaskRepeat = Globals | DataType.RepeatStyle | (string & {});
  export type MaskSize<TLength = (string & {}) | 0> = Globals | DataType.BgSize<TLength> | (string & {});
  export type MaskType = Globals | "alpha" | "luminance";
  export type MathDepth = Globals | "auto-add" | (string & {}) | (number & {});
  export type MathShift = Globals | "compact" | "normal";
  export type MathStyle = Globals | "compact" | "normal";
  export type MaxBlockSize<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fill-available"
    | "fit-content"
    | "max-content"
    | "min-content"
    | "none"
    | (string & {});
  export type MaxHeight<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-fit-content"
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fit-content"
    | "-webkit-max-content"
    | "-webkit-min-content"
    | "fit-content"
    | "intrinsic"
    | "max-content"
    | "min-content"
    | "none"
    | (string & {});
  export type MaxInlineSize<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-fit-content"
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fill-available"
    | "fit-content"
    | "max-content"
    | "min-content"
    | "none"
    | (string & {});
  export type MaxLines = Globals | "none" | (number & {}) | (string & {});
  export type MaxWidth<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-fit-content"
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fit-content"
    | "-webkit-max-content"
    | "-webkit-min-content"
    | "fit-content"
    | "intrinsic"
    | "max-content"
    | "min-content"
    | "none"
    | (string & {});
  export type MinBlockSize<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fill-available"
    | "auto"
    | "fit-content"
    | "max-content"
    | "min-content"
    | (string & {});
  export type MinHeight<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-fit-content"
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fit-content"
    | "-webkit-max-content"
    | "-webkit-min-content"
    | "auto"
    | "fit-content"
    | "intrinsic"
    | "max-content"
    | "min-content"
    | (string & {});
  export type MinInlineSize<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-fit-content"
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fill-available"
    | "auto"
    | "fit-content"
    | "max-content"
    | "min-content"
    | (string & {});
  export type MinWidth<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-fit-content"
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fill-available"
    | "-webkit-fit-content"
    | "-webkit-max-content"
    | "-webkit-min-content"
    | "auto"
    | "fit-content"
    | "intrinsic"
    | "max-content"
    | "min-content"
    | "min-intrinsic"
    | (string & {});
  export type MixBlendMode = Globals | DataType.BlendMode | "plus-lighter";
  export type Offset<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength> | DataType.GeometryBox | "auto" | "none" | (string & {});
  export type OffsetDistance<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type OffsetPath = Globals | DataType.GeometryBox | "none" | (string & {});
  export type OffsetRotate = Globals | "auto" | "reverse" | (string & {});
  export type ObjectFit = Globals | "contain" | "cover" | "fill" | "none" | "scale-down";
  export type ObjectPosition<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength>;
  export type OffsetAnchor<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength> | "auto";
  export type Opacity = Globals | (string & {}) | (number & {});
  export type Order = Globals | (number & {}) | (string & {});
  export type Orphans = Globals | (number & {}) | (string & {});
  export type Outline<TLength = (string & {}) | 0> = Globals | DataType.Color | DataType.LineStyle | DataType.LineWidth<TLength> | "auto" | "invert" | (string & {});
  export type OutlineColor = Globals | DataType.Color | "invert";
  export type OutlineOffset<TLength = (string & {}) | 0> = Globals | TLength;
  export type OutlineStyle = Globals | DataType.LineStyle | "auto" | (string & {});
  export type OutlineWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;
  export type Overflow = Globals | "-moz-hidden-unscrollable" | "auto" | "clip" | "hidden" | "scroll" | "visible" | (string & {});
  export type OverflowAnchor = Globals | "auto" | "none";
  export type OverflowBlock = Globals | "auto" | "clip" | "hidden" | "scroll" | "visible";
  export type OverflowClipBox = Globals | "content-box" | "padding-box";
  export type OverflowClipMargin<TLength = (string & {}) | 0> = Globals | DataType.VisualBox | TLength | (string & {});
  export type OverflowInline = Globals | "auto" | "clip" | "hidden" | "scroll" | "visible";
  export type OverflowWrap = Globals | "anywhere" | "break-word" | "normal";
  export type OverflowX = Globals | "-moz-hidden-unscrollable" | "auto" | "clip" | "hidden" | "scroll" | "visible";
  export type OverflowY = Globals | "-moz-hidden-unscrollable" | "auto" | "clip" | "hidden" | "scroll" | "visible";
  export type OverscrollBehavior = Globals | "auto" | "contain" | "none" | (string & {});
  export type OverscrollBehaviorBlock = Globals | "auto" | "contain" | "none";
  export type OverscrollBehaviorInline = Globals | "auto" | "contain" | "none";
  export type OverscrollBehaviorX = Globals | "auto" | "contain" | "none";
  export type OverscrollBehaviorY = Globals | "auto" | "contain" | "none";
  export type Padding<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type PaddingBlock<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type PaddingBlockEnd<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type PaddingBlockStart<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type PaddingBottom<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type PaddingInline<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type PaddingInlineEnd<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type PaddingInlineStart<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type PaddingLeft<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type PaddingRight<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type PaddingTop<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type PageBreakAfter = Globals | "always" | "auto" | "avoid" | "left" | "recto" | "right" | "verso";
  export type PageBreakBefore = Globals | "always" | "auto" | "avoid" | "left" | "recto" | "right" | "verso";
  export type PageBreakInside = Globals | "auto" | "avoid";
  export type PaintOrder = Globals | "fill" | "markers" | "normal" | "stroke" | (string & {});
  export type Perspective<TLength = (string & {}) | 0> = Globals | TLength | "none";
  export type PerspectiveOrigin<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength>;
  export type PlaceContent = Globals | DataType.ContentDistribution | DataType.ContentPosition | "baseline" | "normal" | (string & {});
  export type PlaceItems = Globals | DataType.SelfPosition | "baseline" | "normal" | "stretch" | (string & {});
  export type PlaceSelf = Globals | DataType.SelfPosition | "auto" | "baseline" | "normal" | "stretch" | (string & {});
  export type PointerEvents = Globals | "all" | "auto" | "fill" | "inherit" | "none" | "painted" | "stroke" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke";
  export type Position = Globals | "-webkit-sticky" | "absolute" | "fixed" | "relative" | "static" | "sticky";
  export type Quotes = Globals | "auto" | "none" | (string & {});
  export type Resize = Globals | "block" | "both" | "horizontal" | "inline" | "none" | "vertical";
  export type Right<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type Rotate = Globals | "none" | (string & {});
  export type RowGap<TLength = (string & {}) | 0> = Globals | TLength | "normal" | (string & {});
  export type RubyAlign = Globals | "center" | "space-around" | "space-between" | "start";
  export type RubyMerge = Globals | "auto" | "collapse" | "separate";
  export type RubyPosition = Globals | "alternate" | "inter-character" | "over" | "under" | (string & {});
  export type Scale = Globals | "none" | (string & {}) | (number & {});
  export type ScrollBehavior = Globals | "auto" | "smooth";
  export type ScrollMargin<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type ScrollMarginBlock<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type ScrollMarginBlockEnd<TLength = (string & {}) | 0> = Globals | TLength;
  export type ScrollMarginBlockStart<TLength = (string & {}) | 0> = Globals | TLength;
  export type ScrollMarginBottom<TLength = (string & {}) | 0> = Globals | TLength;
  export type ScrollMarginInline<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type ScrollMarginInlineEnd<TLength = (string & {}) | 0> = Globals | TLength;
  export type ScrollMarginInlineStart<TLength = (string & {}) | 0> = Globals | TLength;
  export type ScrollMarginLeft<TLength = (string & {}) | 0> = Globals | TLength;
  export type ScrollMarginRight<TLength = (string & {}) | 0> = Globals | TLength;
  export type ScrollMarginTop<TLength = (string & {}) | 0> = Globals | TLength;
  export type ScrollPadding<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type ScrollPaddingBlock<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type ScrollPaddingBlockEnd<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type ScrollPaddingBlockStart<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type ScrollPaddingBottom<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type ScrollPaddingInline<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type ScrollPaddingInlineEnd<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type ScrollPaddingInlineStart<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type ScrollPaddingLeft<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type ScrollPaddingRight<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type ScrollPaddingTop<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type ScrollSnapAlign = Globals | "center" | "end" | "none" | "start" | (string & {});
  export type ScrollSnapCoordinate<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength> | "none" | (string & {});
  export type ScrollSnapDestination<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength>;
  export type ScrollSnapPointsX = Globals | "none" | (string & {});
  export type ScrollSnapPointsY = Globals | "none" | (string & {});
  export type ScrollSnapStop = Globals | "always" | "normal";
  export type ScrollSnapType = Globals | "block" | "both" | "inline" | "none" | "x" | "y" | (string & {});
  export type ScrollSnapTypeX = Globals | "mandatory" | "none" | "proximity";
  export type ScrollSnapTypeY = Globals | "mandatory" | "none" | "proximity";
  export type ScrollbarColor = Globals | "auto" | (string & {});
  export type ScrollbarGutter = Globals | "auto" | "stable" | (string & {});
  export type ScrollbarWidth = Globals | "auto" | "none" | "thin";
  export type ShapeImageThreshold = Globals | (string & {}) | (number & {});
  export type ShapeMargin<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type ShapeOutside = Globals | DataType.Box | "margin-box" | "none" | (string & {});
  export type TabSize<TLength = (string & {}) | 0> = Globals | TLength | (number & {}) | (string & {});
  export type TableLayout = Globals | "auto" | "fixed";
  export type TextAlign = Globals | "center" | "end" | "justify" | "left" | "match-parent" | "right" | "start";
  export type TextAlignLast = Globals | "auto" | "center" | "end" | "justify" | "left" | "right" | "start";
  export type TextCombineUpright = Globals | "all" | "none" | (string & {});
  export type TextDecoration<TLength = (string & {}) | 0> =
    | Globals
    | DataType.Color
    | TLength
    | "auto"
    | "blink"
    | "dashed"
    | "dotted"
    | "double"
    | "from-font"
    | "grammar-error"
    | "line-through"
    | "none"
    | "overline"
    | "solid"
    | "spelling-error"
    | "underline"
    | "wavy"
    | (string & {});
  export type TextDecorationColor = Globals | DataType.Color;
  export type TextDecorationLine = Globals | "blink" | "grammar-error" | "line-through" | "none" | "overline" | "spelling-error" | "underline" | (string & {});
  export type TextDecorationSkip = Globals | "box-decoration" | "edges" | "leading-spaces" | "none" | "objects" | "spaces" | "trailing-spaces" | (string & {});
  export type TextDecorationSkipInk = Globals | "all" | "auto" | "none";
  export type TextDecorationStyle = Globals | "dashed" | "dotted" | "double" | "solid" | "wavy";
  export type TextDecorationThickness<TLength = (string & {}) | 0> = Globals | TLength | "auto" | "from-font" | (string & {});
  export type TextEmphasis = Globals | DataType.Color | "circle" | "dot" | "double-circle" | "filled" | "none" | "open" | "sesame" | "triangle" | (string & {});
  export type TextEmphasisColor = Globals | DataType.Color;
  export type TextEmphasisPosition = Globals | (string & {});
  export type TextEmphasisStyle = Globals | "circle" | "dot" | "double-circle" | "filled" | "none" | "open" | "sesame" | "triangle" | (string & {});
  export type TextIndent<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type TextJustify = Globals | "auto" | "inter-character" | "inter-word" | "none";
  export type TextOrientation = Globals | "mixed" | "sideways" | "upright";
  export type TextOverflow = Globals | "clip" | "ellipsis" | (string & {});
  export type TextRendering = Globals | "auto" | "geometricPrecision" | "optimizeLegibility" | "optimizeSpeed";
  export type TextShadow = Globals | "none" | (string & {});
  export type TextSizeAdjust = Globals | "auto" | "none" | (string & {});
  export type TextTransform = Globals | "capitalize" | "full-size-kana" | "full-width" | "lowercase" | "none" | "uppercase";
  export type TextUnderlineOffset<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type TextUnderlinePosition = Globals | "auto" | "from-font" | "left" | "right" | "under" | (string & {});
  export type Top<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type TouchAction =
    | Globals
    | "-ms-manipulation"
    | "-ms-none"
    | "-ms-pinch-zoom"
    | "auto"
    | "manipulation"
    | "none"
    | "pan-down"
    | "pan-left"
    | "pan-right"
    | "pan-up"
    | "pan-x"
    | "pan-y"
    | "pinch-zoom"
    | (string & {});
  export type Transform = Globals | "none" | (string & {});
  export type TransformBox = Globals | "border-box" | "content-box" | "fill-box" | "stroke-box" | "view-box";
  export type TransformOrigin<TLength = (string & {}) | 0> = Globals | TLength | "bottom" | "center" | "left" | "right" | "top" | (string & {});
  export type TransformStyle = Globals | "flat" | "preserve-3d";
  export type Transition<TTime = string & {}> = Globals | DataType.SingleTransition<TTime> | (string & {});
  export type TransitionDelay<TTime = string & {}> = Globals | TTime | (string & {});
  export type TransitionDuration<TTime = string & {}> = Globals | TTime | (string & {});
  export type TransitionProperty = Globals | "all" | "none" | (string & {});
  export type TransitionTimingFunction = Globals | DataType.EasingFunction | (string & {});
  export type Translate<TLength = (string & {}) | 0> = Globals | TLength | "none" | (string & {});
  export type UnicodeBidi =
    | Globals
    | "-moz-isolate"
    | "-moz-isolate-override"
    | "-moz-plaintext"
    | "-webkit-isolate"
    | "-webkit-isolate-override"
    | "-webkit-plaintext"
    | "bidi-override"
    | "embed"
    | "isolate"
    | "isolate-override"
    | "normal"
    | "plaintext";
  export type UserSelect = Globals | "-moz-none" | "all" | "auto" | "contain" | "element" | "none" | "text";
  export type VerticalAlign<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "baseline"
    | "bottom"
    | "middle"
    | "sub"
    | "super"
    | "text-bottom"
    | "text-top"
    | "top"
    | (string & {});
  export type Visibility = Globals | "collapse" | "hidden" | "visible";
  export type WhiteSpace = Globals | "-moz-pre-wrap" | "break-spaces" | "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap";
  export type Widows = Globals | (number & {}) | (string & {});
  export type Width<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-fit-content"
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fit-content"
    | "-webkit-max-content"
    | "auto"
    | "fit-content"
    | "intrinsic"
    | "max-content"
    | "min-content"
    | "min-intrinsic"
    | (string & {});
  export type WillChange = Globals | DataType.AnimateableFeature | "auto" | (string & {});
  export type WordBreak = Globals | "break-all" | "break-word" | "keep-all" | "normal";
  export type WordSpacing<TLength = (string & {}) | 0> = Globals | TLength | "normal";
  export type WordWrap = Globals | "break-word" | "normal";
  export type WritingMode = Globals | "horizontal-tb" | "sideways-lr" | "sideways-rl" | "vertical-lr" | "vertical-rl";
  export type ZIndex = Globals | "auto" | (number & {}) | (string & {});
  export type Zoom = Globals | "normal" | "reset" | (string & {}) | (number & {});
  export type MozAppearance =
    | Globals
    | "-moz-mac-unified-toolbar"
    | "-moz-win-borderless-glass"
    | "-moz-win-browsertabbar-toolbox"
    | "-moz-win-communications-toolbox"
    | "-moz-win-communicationstext"
    | "-moz-win-exclude-glass"
    | "-moz-win-glass"
    | "-moz-win-media-toolbox"
    | "-moz-win-mediatext"
    | "-moz-window-button-box"
    | "-moz-window-button-box-maximized"
    | "-moz-window-button-close"
    | "-moz-window-button-maximize"
    | "-moz-window-button-minimize"
    | "-moz-window-button-restore"
    | "-moz-window-frame-bottom"
    | "-moz-window-frame-left"
    | "-moz-window-frame-right"
    | "-moz-window-titlebar"
    | "-moz-window-titlebar-maximized"
    | "button"
    | "button-arrow-down"
    | "button-arrow-next"
    | "button-arrow-previous"
    | "button-arrow-up"
    | "button-bevel"
    | "button-focus"
    | "caret"
    | "checkbox"
    | "checkbox-container"
    | "checkbox-label"
    | "checkmenuitem"
    | "dualbutton"
    | "groupbox"
    | "listbox"
    | "listitem"
    | "menuarrow"
    | "menubar"
    | "menucheckbox"
    | "menuimage"
    | "menuitem"
    | "menuitemtext"
    | "menulist"
    | "menulist-button"
    | "menulist-text"
    | "menulist-textfield"
    | "menupopup"
    | "menuradio"
    | "menuseparator"
    | "meterbar"
    | "meterchunk"
    | "none"
    | "progressbar"
    | "progressbar-vertical"
    | "progresschunk"
    | "progresschunk-vertical"
    | "radio"
    | "radio-container"
    | "radio-label"
    | "radiomenuitem"
    | "range"
    | "range-thumb"
    | "resizer"
    | "resizerpanel"
    | "scale-horizontal"
    | "scale-vertical"
    | "scalethumb-horizontal"
    | "scalethumb-vertical"
    | "scalethumbend"
    | "scalethumbstart"
    | "scalethumbtick"
    | "scrollbarbutton-down"
    | "scrollbarbutton-left"
    | "scrollbarbutton-right"
    | "scrollbarbutton-up"
    | "scrollbarthumb-horizontal"
    | "scrollbarthumb-vertical"
    | "scrollbartrack-horizontal"
    | "scrollbartrack-vertical"
    | "searchfield"
    | "separator"
    | "sheet"
    | "spinner"
    | "spinner-downbutton"
    | "spinner-textfield"
    | "spinner-upbutton"
    | "splitter"
    | "statusbar"
    | "statusbarpanel"
    | "tab"
    | "tab-scroll-arrow-back"
    | "tab-scroll-arrow-forward"
    | "tabpanel"
    | "tabpanels"
    | "textfield"
    | "textfield-multiline"
    | "toolbar"
    | "toolbarbutton"
    | "toolbarbutton-dropdown"
    | "toolbargripper"
    | "toolbox"
    | "tooltip"
    | "treeheader"
    | "treeheadercell"
    | "treeheadersortarrow"
    | "treeitem"
    | "treeline"
    | "treetwisty"
    | "treetwistyopen"
    | "treeview";
  export type MozBinding = Globals | "none" | (string & {});
  export type MozBorderBottomColors = Globals | DataType.Color | "none" | (string & {});
  export type MozBorderLeftColors = Globals | DataType.Color | "none" | (string & {});
  export type MozBorderRightColors = Globals | DataType.Color | "none" | (string & {});
  export type MozBorderTopColors = Globals | DataType.Color | "none" | (string & {});
  export type MozContextProperties = Globals | "fill" | "fill-opacity" | "none" | "stroke" | "stroke-opacity" | (string & {});
  export type MozFloatEdge = Globals | "border-box" | "content-box" | "margin-box" | "padding-box";
  export type MozForceBrokenImageIcon = Globals | 0 | (string & {}) | 1;
  export type MozImageRegion = Globals | "auto" | (string & {});
  export type MozOrient = Globals | "block" | "horizontal" | "inline" | "vertical";
  export type MozOutlineRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type MozOutlineRadiusBottomleft<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type MozOutlineRadiusBottomright<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type MozOutlineRadiusTopleft<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type MozOutlineRadiusTopright<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type MozStackSizing = Globals | "ignore" | "stretch-to-fit";
  export type MozTextBlink = Globals | "blink" | "none";
  export type MozUserFocus = Globals | "ignore" | "none" | "normal" | "select-after" | "select-all" | "select-before" | "select-menu" | "select-same";
  export type MozUserInput = Globals | "auto" | "disabled" | "enabled" | "none";
  export type MozUserModify = Globals | "read-only" | "read-write" | "write-only";
  export type MozWindowDragging = Globals | "drag" | "no-drag";
  export type MozWindowShadow = Globals | "default" | "menu" | "none" | "sheet" | "tooltip";
  export type MsAccelerator = Globals | "false" | "true";
  export type MsBlockProgression = Globals | "bt" | "lr" | "rl" | "tb";
  export type MsContentZoomChaining = Globals | "chained" | "none";
  export type MsContentZoomLimit = Globals | (string & {});
  export type MsContentZoomLimitMax = Globals | (string & {});
  export type MsContentZoomLimitMin = Globals | (string & {});
  export type MsContentZoomSnap = Globals | "mandatory" | "none" | "proximity" | (string & {});
  export type MsContentZoomSnapPoints = Globals | (string & {});
  export type MsContentZoomSnapType = Globals | "mandatory" | "none" | "proximity";
  export type MsContentZooming = Globals | "none" | "zoom";
  export type MsFilter = Globals | (string & {});
  export type MsFlowFrom = Globals | "none" | (string & {});
  export type MsFlowInto = Globals | "none" | (string & {});
  export type MsGridColumns<TLength = (string & {}) | 0> = Globals | DataType.TrackBreadth<TLength> | "none" | (string & {});
  export type MsGridRows<TLength = (string & {}) | 0> = Globals | DataType.TrackBreadth<TLength> | "none" | (string & {});
  export type MsHighContrastAdjust = Globals | "auto" | "none";
  export type MsHyphenateLimitChars = Globals | "auto" | (string & {}) | (number & {});
  export type MsHyphenateLimitLines = Globals | "no-limit" | (number & {}) | (string & {});
  export type MsHyphenateLimitZone<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type MsImeAlign = Globals | "after" | "auto";
  export type MsOverflowStyle = Globals | "-ms-autohiding-scrollbar" | "auto" | "none" | "scrollbar";
  export type MsScrollChaining = Globals | "chained" | "none";
  export type MsScrollLimit = Globals | (string & {});
  export type MsScrollLimitXMax<TLength = (string & {}) | 0> = Globals | TLength | "auto";
  export type MsScrollLimitXMin<TLength = (string & {}) | 0> = Globals | TLength;
  export type MsScrollLimitYMax<TLength = (string & {}) | 0> = Globals | TLength | "auto";
  export type MsScrollLimitYMin<TLength = (string & {}) | 0> = Globals | TLength;
  export type MsScrollRails = Globals | "none" | "railed";
  export type MsScrollSnapPointsX = Globals | (string & {});
  export type MsScrollSnapPointsY = Globals | (string & {});
  export type MsScrollSnapType = Globals | "mandatory" | "none" | "proximity";
  export type MsScrollSnapX = Globals | (string & {});
  export type MsScrollSnapY = Globals | (string & {});
  export type MsScrollTranslation = Globals | "none" | "vertical-to-horizontal";
  export type MsScrollbar3dlightColor = Globals | DataType.Color;
  export type MsScrollbarArrowColor = Globals | DataType.Color;
  export type MsScrollbarBaseColor = Globals | DataType.Color;
  export type MsScrollbarDarkshadowColor = Globals | DataType.Color;
  export type MsScrollbarFaceColor = Globals | DataType.Color;
  export type MsScrollbarHighlightColor = Globals | DataType.Color;
  export type MsScrollbarShadowColor = Globals | DataType.Color;
  export type MsScrollbarTrackColor = Globals | DataType.Color;
  export type MsTextAutospace = Globals | "ideograph-alpha" | "ideograph-numeric" | "ideograph-parenthesis" | "ideograph-space" | "none";
  export type MsTouchSelect = Globals | "grippers" | "none";
  export type MsUserSelect = Globals | "element" | "none" | "text";
  export type MsWrapFlow = Globals | "auto" | "both" | "clear" | "end" | "maximum" | "start";
  export type MsWrapMargin<TLength = (string & {}) | 0> = Globals | TLength;
  export type MsWrapThrough = Globals | "none" | "wrap";
  export type WebkitAppearance =
    | Globals
    | "-apple-pay-button"
    | "button"
    | "button-bevel"
    | "caret"
    | "checkbox"
    | "default-button"
    | "inner-spin-button"
    | "listbox"
    | "listitem"
    | "media-controls-background"
    | "media-controls-fullscreen-background"
    | "media-current-time-display"
    | "media-enter-fullscreen-button"
    | "media-exit-fullscreen-button"
    | "media-fullscreen-button"
    | "media-mute-button"
    | "media-overlay-play-button"
    | "media-play-button"
    | "media-seek-back-button"
    | "media-seek-forward-button"
    | "media-slider"
    | "media-sliderthumb"
    | "media-time-remaining-display"
    | "media-toggle-closed-captions-button"
    | "media-volume-slider"
    | "media-volume-slider-container"
    | "media-volume-sliderthumb"
    | "menulist"
    | "menulist-button"
    | "menulist-text"
    | "menulist-textfield"
    | "meter"
    | "none"
    | "progress-bar"
    | "progress-bar-value"
    | "push-button"
    | "radio"
    | "searchfield"
    | "searchfield-cancel-button"
    | "searchfield-decoration"
    | "searchfield-results-button"
    | "searchfield-results-decoration"
    | "slider-horizontal"
    | "slider-vertical"
    | "sliderthumb-horizontal"
    | "sliderthumb-vertical"
    | "square-button"
    | "textarea"
    | "textfield";
  export type WebkitBorderBefore<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});
  export type WebkitBorderBeforeColor = Globals | DataType.Color;
  export type WebkitBorderBeforeStyle = Globals | DataType.LineStyle | (string & {});
  export type WebkitBorderBeforeWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | (string & {});
  export type WebkitBoxReflect<TLength = (string & {}) | 0> = Globals | TLength | "above" | "below" | "left" | "right" | (string & {});
  export type WebkitLineClamp = Globals | "none" | (number & {}) | (string & {});
  export type WebkitMask<TLength = (string & {}) | 0> =
    | Globals
    | DataType.Position<TLength>
    | DataType.RepeatStyle
    | DataType.Box
    | "border"
    | "content"
    | "none"
    | "padding"
    | "text"
    | (string & {});
  export type WebkitMaskAttachment = Globals | DataType.Attachment | (string & {});
  export type WebkitMaskClip = Globals | DataType.Box | "border" | "content" | "padding" | "text" | (string & {});
  export type WebkitMaskComposite = Globals | DataType.CompositeStyle | (string & {});
  export type WebkitMaskImage = Globals | "none" | (string & {});
  export type WebkitMaskOrigin = Globals | DataType.Box | "border" | "content" | "padding" | (string & {});
  export type WebkitMaskPosition<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength> | (string & {});
  export type WebkitMaskPositionX<TLength = (string & {}) | 0> = Globals | TLength | "center" | "left" | "right" | (string & {});
  export type WebkitMaskPositionY<TLength = (string & {}) | 0> = Globals | TLength | "bottom" | "center" | "top" | (string & {});
  export type WebkitMaskRepeat = Globals | DataType.RepeatStyle | (string & {});
  export type WebkitMaskRepeatX = Globals | "no-repeat" | "repeat" | "round" | "space";
  export type WebkitMaskRepeatY = Globals | "no-repeat" | "repeat" | "round" | "space";
  export type WebkitMaskSize<TLength = (string & {}) | 0> = Globals | DataType.BgSize<TLength> | (string & {});
  export type WebkitOverflowScrolling = Globals | "auto" | "touch";
  export type WebkitTapHighlightColor = Globals | DataType.Color;
  export type WebkitTextFillColor = Globals | DataType.Color;
  export type WebkitTextStroke<TLength = (string & {}) | 0> = Globals | DataType.Color | TLength | (string & {});
  export type WebkitTextStrokeColor = Globals | DataType.Color;
  export type WebkitTextStrokeWidth<TLength = (string & {}) | 0> = Globals | TLength;
  export type WebkitTouchCallout = Globals | "default" | "none";
  export type WebkitUserModify = Globals | "read-only" | "read-write" | "read-write-plaintext-only";
  export type AlignmentBaseline =
    | Globals
    | "after-edge"
    | "alphabetic"
    | "auto"
    | "baseline"
    | "before-edge"
    | "central"
    | "hanging"
    | "ideographic"
    | "mathematical"
    | "middle"
    | "text-after-edge"
    | "text-before-edge";
  export type BaselineShift<TLength = (string & {}) | 0> = Globals | TLength | "baseline" | "sub" | "super" | (string & {});
  export type ClipRule = Globals | "evenodd" | "nonzero";
  export type ColorInterpolation = Globals | "auto" | "linearRGB" | "sRGB";
  export type ColorRendering = Globals | "auto" | "optimizeQuality" | "optimizeSpeed";
  export type DominantBaseline =
    | Globals
    | "alphabetic"
    | "auto"
    | "central"
    | "hanging"
    | "ideographic"
    | "mathematical"
    | "middle"
    | "no-change"
    | "reset-size"
    | "text-after-edge"
    | "text-before-edge"
    | "use-script";
  export type Fill = Globals | DataType.Paint;
  export type FillOpacity = Globals | (number & {}) | (string & {});
  export type FillRule = Globals | "evenodd" | "nonzero";
  export type FloodColor = Globals | DataType.Color | "currentColor";
  export type FloodOpacity = Globals | (number & {}) | (string & {});
  export type GlyphOrientationVertical = Globals | "auto" | (string & {}) | (number & {});
  export type LightingColor = Globals | DataType.Color | "currentColor";
  export type Marker = Globals | "none" | (string & {});
  export type MarkerEnd = Globals | "none" | (string & {});
  export type MarkerMid = Globals | "none" | (string & {});
  export type MarkerStart = Globals | "none" | (string & {});
  export type ShapeRendering = Globals | "auto" | "crispEdges" | "geometricPrecision" | "optimizeSpeed";
  export type StopColor = Globals | DataType.Color | "currentColor";
  export type StopOpacity = Globals | (number & {}) | (string & {});
  export type Stroke = Globals | DataType.Paint;
  export type StrokeDasharray<TLength = (string & {}) | 0> = Globals | DataType.Dasharray<TLength> | "none";
  export type StrokeDashoffset<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type StrokeLinecap = Globals | "butt" | "round" | "square";
  export type StrokeLinejoin = Globals | "bevel" | "miter" | "round";
  export type StrokeMiterlimit = Globals | (number & {}) | (string & {});
  export type StrokeOpacity = Globals | (number & {}) | (string & {});
  export type StrokeWidth<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type TextAnchor = Globals | "end" | "middle" | "start";
  export type VectorEffect = Globals | "non-scaling-stroke" | "none";
}
declare namespace DataType {
  type AbsoluteSize = "large" | "medium" | "small" | "x-large" | "x-small" | "xx-large" | "xx-small" | "xxx-large";
  type AnimateableFeature = "contents" | "scroll-position" | (string & {});
  type Attachment = "fixed" | "local" | "scroll";
  type BgPosition<TLength> = TLength | "bottom" | "center" | "left" | "right" | "top" | (string & {});
  type BgSize<TLength> = TLength | "auto" | "contain" | "cover" | (string & {});
  type BlendMode =
    | "color"
    | "color-burn"
    | "color-dodge"
    | "darken"
    | "difference"
    | "exclusion"
    | "hard-light"
    | "hue"
    | "lighten"
    | "luminosity"
    | "multiply"
    | "normal"
    | "overlay"
    | "saturation"
    | "screen"
    | "soft-light";
  type Box = "border-box" | "content-box" | "padding-box";
  type Color = NamedColor | DeprecatedSystemColor | "currentcolor" | (string & {});
  type CompatAuto =
    | "button"
    | "checkbox"
    | "listbox"
    | "menulist"
    | "meter"
    | "progress-bar"
    | "push-button"
    | "radio"
    | "searchfield"
    | "slider-horizontal"
    | "square-button"
    | "textarea";
  type CompositeStyle =
    | "clear"
    | "copy"
    | "destination-atop"
    | "destination-in"
    | "destination-out"
    | "destination-over"
    | "source-atop"
    | "source-in"
    | "source-out"
    | "source-over"
    | "xor";
  type CompositingOperator = "add" | "exclude" | "intersect" | "subtract";
  type ContentDistribution = "space-around" | "space-between" | "space-evenly" | "stretch";
  type ContentList = Quote | "contents" | (string & {});
  type ContentPosition = "center" | "end" | "flex-end" | "flex-start" | "start";
  type CubicBezierTimingFunction = "ease" | "ease-in" | "ease-in-out" | "ease-out" | (string & {});
  type Dasharray<TLength> = TLength | (string & {}) | (number & {});
  type DeprecatedSystemColor =
    | "ActiveBorder"
    | "ActiveCaption"
    | "AppWorkspace"
    | "Background"
    | "ButtonFace"
    | "ButtonHighlight"
    | "ButtonShadow"
    | "ButtonText"
    | "CaptionText"
    | "GrayText"
    | "Highlight"
    | "HighlightText"
    | "InactiveBorder"
    | "InactiveCaption"
    | "InactiveCaptionText"
    | "InfoBackground"
    | "InfoText"
    | "Menu"
    | "MenuText"
    | "Scrollbar"
    | "ThreeDDarkShadow"
    | "ThreeDFace"
    | "ThreeDHighlight"
    | "ThreeDLightShadow"
    | "ThreeDShadow"
    | "Window"
    | "WindowFrame"
    | "WindowText";
  type DisplayInside = "-ms-flexbox" | "-ms-grid" | "-webkit-flex" | "flex" | "flow" | "flow-root" | "grid" | "ruby" | "table";
  type DisplayInternal =
    | "ruby-base"
    | "ruby-base-container"
    | "ruby-text"
    | "ruby-text-container"
    | "table-caption"
    | "table-cell"
    | "table-column"
    | "table-column-group"
    | "table-footer-group"
    | "table-header-group"
    | "table-row"
    | "table-row-group";
  type DisplayLegacy = "-ms-inline-flexbox" | "-ms-inline-grid" | "-webkit-inline-flex" | "inline-block" | "inline-flex" | "inline-grid" | "inline-list-item" | "inline-table";
  type DisplayOutside = "block" | "inline" | "run-in";
  type EasingFunction = CubicBezierTimingFunction | StepTimingFunction | "linear";
  type EastAsianVariantValues = "jis04" | "jis78" | "jis83" | "jis90" | "simplified" | "traditional";
  type FinalBgLayer<TLength> = Color | BgPosition<TLength> | RepeatStyle | Attachment | Box | "none" | (string & {});
  type FontStretchAbsolute =
    | "condensed"
    | "expanded"
    | "extra-condensed"
    | "extra-expanded"
    | "normal"
    | "semi-condensed"
    | "semi-expanded"
    | "ultra-condensed"
    | "ultra-expanded"
    | (string & {});
  type FontWeightAbsolute = "bold" | "normal" | (number & {}) | (string & {});
  type GenericFamily = "cursive" | "fantasy" | "monospace" | "sans-serif" | "serif";
  type GeometryBox = Box | "fill-box" | "margin-box" | "stroke-box" | "view-box";
  type GridLine = "auto" | (string & {}) | (number & {});
  type LineStyle = "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid";
  type LineWidth<TLength> = TLength | "medium" | "thick" | "thin";
  type MaskLayer<TLength> = Position<TLength> | RepeatStyle | GeometryBox | CompositingOperator | MaskingMode | "no-clip" | "none" | (string & {});
  type MaskingMode = "alpha" | "luminance" | "match-source";
  type NamedColor =
    | "aliceblue"
    | "antiquewhite"
    | "aqua"
    | "aquamarine"
    | "azure"
    | "beige"
    | "bisque"
    | "black"
    | "blanchedalmond"
    | "blue"
    | "blueviolet"
    | "brown"
    | "burlywood"
    | "cadetblue"
    | "chartreuse"
    | "chocolate"
    | "coral"
    | "cornflowerblue"
    | "cornsilk"
    | "crimson"
    | "cyan"
    | "darkblue"
    | "darkcyan"
    | "darkgoldenrod"
    | "darkgray"
    | "darkgreen"
    | "darkgrey"
    | "darkkhaki"
    | "darkmagenta"
    | "darkolivegreen"
    | "darkorange"
    | "darkorchid"
    | "darkred"
    | "darksalmon"
    | "darkseagreen"
    | "darkslateblue"
    | "darkslategray"
    | "darkslategrey"
    | "darkturquoise"
    | "darkviolet"
    | "deeppink"
    | "deepskyblue"
    | "dimgray"
    | "dimgrey"
    | "dodgerblue"
    | "firebrick"
    | "floralwhite"
    | "forestgreen"
    | "fuchsia"
    | "gainsboro"
    | "ghostwhite"
    | "gold"
    | "goldenrod"
    | "gray"
    | "green"
    | "greenyellow"
    | "grey"
    | "honeydew"
    | "hotpink"
    | "indianred"
    | "indigo"
    | "ivory"
    | "khaki"
    | "lavender"
    | "lavenderblush"
    | "lawngreen"
    | "lemonchiffon"
    | "lightblue"
    | "lightcoral"
    | "lightcyan"
    | "lightgoldenrodyellow"
    | "lightgray"
    | "lightgreen"
    | "lightgrey"
    | "lightpink"
    | "lightsalmon"
    | "lightseagreen"
    | "lightskyblue"
    | "lightslategray"
    | "lightslategrey"
    | "lightsteelblue"
    | "lightyellow"
    | "lime"
    | "limegreen"
    | "linen"
    | "magenta"
    | "maroon"
    | "mediumaquamarine"
    | "mediumblue"
    | "mediumorchid"
    | "mediumpurple"
    | "mediumseagreen"
    | "mediumslateblue"
    | "mediumspringgreen"
    | "mediumturquoise"
    | "mediumvioletred"
    | "midnightblue"
    | "mintcream"
    | "mistyrose"
    | "moccasin"
    | "navajowhite"
    | "navy"
    | "oldlace"
    | "olive"
    | "olivedrab"
    | "orange"
    | "orangered"
    | "orchid"
    | "palegoldenrod"
    | "palegreen"
    | "paleturquoise"
    | "palevioletred"
    | "papayawhip"
    | "peachpuff"
    | "peru"
    | "pink"
    | "plum"
    | "powderblue"
    | "purple"
    | "rebeccapurple"
    | "red"
    | "rosybrown"
    | "royalblue"
    | "saddlebrown"
    | "salmon"
    | "sandybrown"
    | "seagreen"
    | "seashell"
    | "sienna"
    | "silver"
    | "skyblue"
    | "slateblue"
    | "slategray"
    | "slategrey"
    | "snow"
    | "springgreen"
    | "steelblue"
    | "tan"
    | "teal"
    | "thistle"
    | "tomato"
    | "transparent"
    | "turquoise"
    | "violet"
    | "wheat"
    | "white"
    | "whitesmoke"
    | "yellow"
    | "yellowgreen";
  type PageSize = "A3" | "A4" | "A5" | "B4" | "B5" | "JIS-B4" | "JIS-B5" | "ledger" | "legal" | "letter";
  type Paint = Color | "child" | "context-fill" | "context-stroke" | "none" | (string & {});
  type Position<TLength> = TLength | "bottom" | "center" | "left" | "right" | "top" | (string & {});
  type Quote = "close-quote" | "no-close-quote" | "no-open-quote" | "open-quote";
  type RepeatStyle = "no-repeat" | "repeat" | "repeat-x" | "repeat-y" | "round" | "space" | (string & {});
  type SelfPosition = "center" | "end" | "flex-end" | "flex-start" | "self-end" | "self-start" | "start";
  type SingleAnimation<TTime> =
    | EasingFunction
    | SingleAnimationDirection
    | SingleAnimationFillMode
    | TTime
    | "infinite"
    | "none"
    | "paused"
    | "running"
    | (string & {})
    | (number & {});
  type SingleAnimationDirection = "alternate" | "alternate-reverse" | "normal" | "reverse";
  type SingleAnimationFillMode = "backwards" | "both" | "forwards" | "none";
  type SingleAnimationTimeline = "auto" | "none" | (string & {});
  type SingleTransition<TTime> = EasingFunction | TTime | "all" | "none" | (string & {});
  type StepTimingFunction = "step-end" | "step-start" | (string & {});
  type TrackBreadth<TLength> = TLength | "auto" | "max-content" | "min-content" | (string & {});
  type ViewportLength<TLength> = TLength | "auto" | (string & {});
  type VisualBox = "border-box" | "content-box" | "padding-box";
}

interface CSSProperties
  extends Properties<string | number>,
    PropertiesHyphen<string | number> {
  [v: `--${string}`]: string | number | undefined
}
type Booleanish = boolean | 'true' | 'false'
type Numberish = number | string
interface AriaAttributes {
  'aria-activedescendant'?: string
  'aria-atomic'?: Booleanish
  'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both'
  'aria-busy'?: Booleanish
  'aria-checked'?: Booleanish | 'mixed'
  'aria-colcount'?: Numberish
  'aria-colindex'?: Numberish
  'aria-colspan'?: Numberish
  'aria-controls'?: string
  'aria-current'?: Booleanish | 'page' | 'step' | 'location' | 'date' | 'time'
  'aria-describedby'?: string
  'aria-details'?: string
  'aria-disabled'?: Booleanish
  'aria-dropeffect'?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup'
  'aria-errormessage'?: string
  'aria-expanded'?: Booleanish
  'aria-flowto'?: string
  'aria-grabbed'?: Booleanish
  'aria-haspopup'?: Booleanish | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'
  'aria-hidden'?: Booleanish
  'aria-invalid'?: Booleanish | 'grammar' | 'spelling'
  'aria-keyshortcuts'?: string
  'aria-label'?: string
  'aria-labelledby'?: string
  'aria-level'?: Numberish
  'aria-live'?: 'off' | 'assertive' | 'polite'
  'aria-modal'?: Booleanish
  'aria-multiline'?: Booleanish
  'aria-multiselectable'?: Booleanish
  'aria-orientation'?: 'horizontal' | 'vertical'
  'aria-owns'?: string
  'aria-placeholder'?: string
  'aria-posinset'?: Numberish
  'aria-pressed'?: Booleanish | 'mixed'
  'aria-readonly'?: Booleanish
  'aria-relevant'?: 'additions' | 'additions text' | 'all' | 'removals' | 'text'
  'aria-required'?: Booleanish
  'aria-roledescription'?: string
  'aria-rowcount'?: Numberish
  'aria-rowindex'?: Numberish
  'aria-rowspan'?: Numberish
  'aria-selected'?: Booleanish
  'aria-setsize'?: Numberish
  'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other'
  'aria-valuemax'?: Numberish
  'aria-valuemin'?: Numberish
  'aria-valuenow'?: Numberish
  'aria-valuetext'?: string
}
type StyleValue = string | CSSProperties | Array<StyleValue>
interface HTMLAttributes extends AriaAttributes, EventHandlers<Events> {
  innerHTML?: string
  class?: any
  style?: StyleValue
  accesskey?: string
  contenteditable?: Booleanish | 'inherit'
  contextmenu?: string
  dir?: string
  draggable?: Booleanish
  hidden?: Booleanish
  id?: string
  lang?: string
  placeholder?: string
  spellcheck?: Booleanish
  tabindex?: Numberish
  title?: string
  translate?: 'yes' | 'no'
  radiogroup?: string
  role?: string
  about?: string
  datatype?: string
  inlist?: any
  prefix?: string
  property?: string
  resource?: string
  typeof?: string
  vocab?: string
  autocapitalize?: string
  autocorrect?: string
  autosave?: string
  color?: string
  itemprop?: string
  itemscope?: Booleanish
  itemtype?: string
  itemid?: string
  itemref?: string
  results?: Numberish
  security?: string
  unselectable?: 'on' | 'off'
  inputmode?:
    | 'none'
    | 'text'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search'
  is?: string
}
interface AnchorHTMLAttributes extends HTMLAttributes {
  download?: any
  href?: string
  hreflang?: string
  media?: string
  ping?: string
  rel?: string
  target?: string
  type?: string
  referrerpolicy?: string
}
interface AreaHTMLAttributes extends HTMLAttributes {
  alt?: string
  coords?: string
  download?: any
  href?: string
  hreflang?: string
  media?: string
  rel?: string
  shape?: string
  target?: string
}
interface AudioHTMLAttributes extends MediaHTMLAttributes {}
interface BaseHTMLAttributes extends HTMLAttributes {
  href?: string
  target?: string
}
interface BlockquoteHTMLAttributes extends HTMLAttributes {
  cite?: string
}
interface ButtonHTMLAttributes extends HTMLAttributes {
  autofocus?: Booleanish
  disabled?: Booleanish
  form?: string
  formaction?: string
  formenctype?: string
  formmethod?: string
  formnovalidate?: Booleanish
  formtarget?: string
  name?: string
  type?: 'submit' | 'reset' | 'button'
  value?: string | string[] | number
}
interface CanvasHTMLAttributes extends HTMLAttributes {
  height?: Numberish
  width?: Numberish
}
interface ColHTMLAttributes extends HTMLAttributes {
  span?: Numberish
  width?: Numberish
}
interface ColgroupHTMLAttributes extends HTMLAttributes {
  span?: Numberish
}
interface DataHTMLAttributes extends HTMLAttributes {
  value?: string | string[] | number
}
interface DetailsHTMLAttributes extends HTMLAttributes {
  open?: Booleanish
}
interface DelHTMLAttributes extends HTMLAttributes {
  cite?: string
  datetime?: string
}
interface DialogHTMLAttributes extends HTMLAttributes {
  open?: Booleanish
}
interface EmbedHTMLAttributes extends HTMLAttributes {
  height?: Numberish
  src?: string
  type?: string
  width?: Numberish
}
interface FieldsetHTMLAttributes extends HTMLAttributes {
  disabled?: Booleanish
  form?: string
  name?: string
}
interface FormHTMLAttributes extends HTMLAttributes {
  acceptcharset?: string
  action?: string
  autocomplete?: string
  enctype?: string
  method?: string
  name?: string
  novalidate?: Booleanish
  target?: string
}
interface HtmlHTMLAttributes extends HTMLAttributes {
  manifest?: string
}
interface IframeHTMLAttributes extends HTMLAttributes {
  allow?: string
  allowfullscreen?: Booleanish
  allowtransparency?: Booleanish
  frameborder?: Numberish
  height?: Numberish
  marginheight?: Numberish
  marginwidth?: Numberish
  name?: string
  referrerpolicy?: string
  sandbox?: string
  scrolling?: string
  seamless?: Booleanish
  src?: string
  srcdoc?: string
  width?: Numberish
}
interface ImgHTMLAttributes extends HTMLAttributes {
  alt?: string
  crossorigin?: 'anonymous' | 'use-credentials' | ''
  decoding?: 'async' | 'auto' | 'sync'
  height?: Numberish
  sizes?: string
  src?: string
  srcset?: string
  usemap?: string
  width?: Numberish
}
interface InsHTMLAttributes extends HTMLAttributes {
  cite?: string
  datetime?: string
}
interface InputHTMLAttributes extends HTMLAttributes {
  accept?: string
  alt?: string
  autocomplete?: string
  autofocus?: Booleanish
  capture?: boolean | 'user' | 'environment'
  checked?: Booleanish | any[] | Set<any>
  crossorigin?: string
  disabled?: Booleanish
  form?: string
  formaction?: string
  formenctype?: string
  formmethod?: string
  formnovalidate?: Booleanish
  formtarget?: string
  height?: Numberish
  indeterminate?: boolean
  list?: string
  max?: Numberish
  maxlength?: Numberish
  min?: Numberish
  minlength?: Numberish
  multiple?: Booleanish
  name?: string
  pattern?: string
  placeholder?: string
  readonly?: Booleanish
  required?: Booleanish
  size?: Numberish
  src?: string
  step?: Numberish
  type?: string
  value?: any
  width?: Numberish
}
interface KeygenHTMLAttributes extends HTMLAttributes {
  autofocus?: Booleanish
  challenge?: string
  disabled?: Booleanish
  form?: string
  keytype?: string
  keyparams?: string
  name?: string
}
interface LabelHTMLAttributes extends HTMLAttributes {
  for?: string
  form?: string
}
interface LiHTMLAttributes extends HTMLAttributes {
  value?: string | string[] | number
}
interface LinkHTMLAttributes extends HTMLAttributes {
  as?: string
  crossorigin?: string
  href?: string
  hreflang?: string
  integrity?: string
  media?: string
  rel?: string
  sizes?: string
  type?: string
}
interface MapHTMLAttributes extends HTMLAttributes {
  name?: string
}
interface MenuHTMLAttributes extends HTMLAttributes {
  type?: string
}
interface MediaHTMLAttributes extends HTMLAttributes {
  autoplay?: Booleanish
  controls?: Booleanish
  controlslist?: string
  crossorigin?: string
  loop?: Booleanish
  mediagroup?: string
  muted?: Booleanish
  playsinline?: Booleanish
  preload?: string
  src?: string
}
interface MetaHTMLAttributes extends HTMLAttributes {
  charset?: string
  content?: string
  httpequiv?: string
  name?: string
}
interface MeterHTMLAttributes extends HTMLAttributes {
  form?: string
  high?: Numberish
  low?: Numberish
  max?: Numberish
  min?: Numberish
  optimum?: Numberish
  value?: string | string[] | number
}
interface QuoteHTMLAttributes extends HTMLAttributes {
  cite?: string
}
interface ObjectHTMLAttributes extends HTMLAttributes {
  classid?: string
  data?: string
  form?: string
  height?: Numberish
  name?: string
  type?: string
  usemap?: string
  width?: Numberish
  wmode?: string
}
interface OlHTMLAttributes extends HTMLAttributes {
  reversed?: Booleanish
  start?: Numberish
  type?: '1' | 'a' | 'A' | 'i' | 'I'
}
interface OptgroupHTMLAttributes extends HTMLAttributes {
  disabled?: Booleanish
  label?: string
}
interface OptionHTMLAttributes extends HTMLAttributes {
  disabled?: Booleanish
  label?: string
  selected?: Booleanish
  value?: any
}
interface OutputHTMLAttributes extends HTMLAttributes {
  for?: string
  form?: string
  name?: string
}
interface ParamHTMLAttributes extends HTMLAttributes {
  name?: string
  value?: string | string[] | number
}
interface ProgressHTMLAttributes extends HTMLAttributes {
  max?: Numberish
  value?: string | string[] | number
}
interface ScriptHTMLAttributes extends HTMLAttributes {
  async?: Booleanish
  charset?: string
  crossorigin?: string
  defer?: Booleanish
  integrity?: string
  nomodule?: Booleanish
  nonce?: string
  src?: string
  type?: string
}
interface SelectHTMLAttributes extends HTMLAttributes {
  autocomplete?: string
  autofocus?: Booleanish
  disabled?: Booleanish
  form?: string
  multiple?: Booleanish
  name?: string
  required?: Booleanish
  size?: Numberish
  value?: any
}
interface SourceHTMLAttributes extends HTMLAttributes {
  media?: string
  sizes?: string
  src?: string
  srcset?: string
  type?: string
}
interface StyleHTMLAttributes extends HTMLAttributes {
  media?: string
  nonce?: string
  scoped?: Booleanish
  type?: string
}
interface TableHTMLAttributes extends HTMLAttributes {
  cellpadding?: Numberish
  cellspacing?: Numberish
  summary?: string
}
interface TextareaHTMLAttributes extends HTMLAttributes {
  autocomplete?: string
  autofocus?: Booleanish
  cols?: Numberish
  dirname?: string
  disabled?: Booleanish
  form?: string
  maxlength?: Numberish
  minlength?: Numberish
  name?: string
  placeholder?: string
  readonly?: boolean
  required?: Booleanish
  rows?: Numberish
  value?: string | string[] | number
  wrap?: string
}
interface TdHTMLAttributes extends HTMLAttributes {
  align?: 'left' | 'center' | 'right' | 'justify' | 'char'
  colspan?: Numberish
  headers?: string
  rowspan?: Numberish
  scope?: string
  valign?: 'top' | 'middle' | 'bottom' | 'baseline'
}
interface ThHTMLAttributes extends HTMLAttributes {
  align?: 'left' | 'center' | 'right' | 'justify' | 'char'
  colspan?: Numberish
  headers?: string
  rowspan?: Numberish
  scope?: string
}
interface TimeHTMLAttributes extends HTMLAttributes {
  datetime?: string
}
interface TrackHTMLAttributes extends HTMLAttributes {
  default?: Booleanish
  kind?: string
  label?: string
  src?: string
  srclang?: string
}
interface VideoHTMLAttributes extends MediaHTMLAttributes {
  height?: Numberish
  playsinline?: Booleanish
  poster?: string
  width?: Numberish
  disablePictureInPicture?: Booleanish
}
interface WebViewHTMLAttributes extends HTMLAttributes {
  allowfullscreen?: Booleanish
  allowpopups?: Booleanish
  autoFocus?: Booleanish
  autosize?: Booleanish
  blinkfeatures?: string
  disableblinkfeatures?: string
  disableguestresize?: Booleanish
  disablewebsecurity?: Booleanish
  guestinstance?: string
  httpreferrer?: string
  nodeintegration?: Booleanish
  partition?: string
  plugins?: Booleanish
  preload?: string
  src?: string
  useragent?: string
  webpreferences?: string
}
interface SVGAttributes extends AriaAttributes, EventHandlers<Events> {
  innerHTML?: string
  class?: any
  style?: StyleValue
  color?: string
  height?: Numberish
  id?: string
  lang?: string
  max?: Numberish
  media?: string
  method?: string
  min?: Numberish
  name?: string
  target?: string
  type?: string
  width?: Numberish
  role?: string
  tabindex?: Numberish
  'accent-height'?: Numberish
  accumulate?: 'none' | 'sum'
  additive?: 'replace' | 'sum'
  'alignment-baseline'?:
    | 'auto'
    | 'baseline'
    | 'before-edge'
    | 'text-before-edge'
    | 'middle'
    | 'central'
    | 'after-edge'
    | 'text-after-edge'
    | 'ideographic'
    | 'alphabetic'
    | 'hanging'
    | 'mathematical'
    | 'inherit'
  allowReorder?: 'no' | 'yes'
  alphabetic?: Numberish
  amplitude?: Numberish
  'arabic-form'?: 'initial' | 'medial' | 'terminal' | 'isolated'
  ascent?: Numberish
  attributeName?: string
  attributeType?: string
  autoReverse?: Numberish
  azimuth?: Numberish
  baseFrequency?: Numberish
  'baseline-shift'?: Numberish
  baseProfile?: Numberish
  bbox?: Numberish
  begin?: Numberish
  bias?: Numberish
  by?: Numberish
  calcMode?: Numberish
  'cap-height'?: Numberish
  clip?: Numberish
  'clip-path'?: string
  clipPathUnits?: Numberish
  'clip-rule'?: Numberish
  'color-interpolation'?: Numberish
  'color-interpolation-filters'?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit'
  'color-profile'?: Numberish
  'color-rendering'?: Numberish
  contentScriptType?: Numberish
  contentStyleType?: Numberish
  cursor?: Numberish
  cx?: Numberish
  cy?: Numberish
  d?: string
  decelerate?: Numberish
  descent?: Numberish
  diffuseConstant?: Numberish
  direction?: Numberish
  display?: Numberish
  divisor?: Numberish
  'dominant-baseline'?: Numberish
  dur?: Numberish
  dx?: Numberish
  dy?: Numberish
  edgeMode?: Numberish
  elevation?: Numberish
  'enable-background'?: Numberish
  end?: Numberish
  exponent?: Numberish
  externalResourcesRequired?: Numberish
  fill?: string
  'fill-opacity'?: Numberish
  'fill-rule'?: 'nonzero' | 'evenodd' | 'inherit'
  filter?: string
  filterRes?: Numberish
  filterUnits?: Numberish
  'flood-color'?: Numberish
  'flood-opacity'?: Numberish
  focusable?: Numberish
  'font-family'?: string
  'font-size'?: Numberish
  'font-size-adjust'?: Numberish
  'font-stretch'?: Numberish
  'font-style'?: Numberish
  'font-variant'?: Numberish
  'font-weight'?: Numberish
  format?: Numberish
  from?: Numberish
  fx?: Numberish
  fy?: Numberish
  g1?: Numberish
  g2?: Numberish
  'glyph-name'?: Numberish
  'glyph-orientation-horizontal'?: Numberish
  'glyph-orientation-vertical'?: Numberish
  glyphRef?: Numberish
  gradientTransform?: string
  gradientUnits?: string
  hanging?: Numberish
  'horiz-adv-x'?: Numberish
  'horiz-origin-x'?: Numberish
  href?: string
  ideographic?: Numberish
  'image-rendering'?: Numberish
  in2?: Numberish
  in?: string
  intercept?: Numberish
  k1?: Numberish
  k2?: Numberish
  k3?: Numberish
  k4?: Numberish
  k?: Numberish
  kernelMatrix?: Numberish
  kernelUnitLength?: Numberish
  kerning?: Numberish
  keyPoints?: Numberish
  keySplines?: Numberish
  keyTimes?: Numberish
  lengthAdjust?: Numberish
  'letter-spacing'?: Numberish
  'lighting-color'?: Numberish
  limitingConeAngle?: Numberish
  local?: Numberish
  'marker-end'?: string
  markerHeight?: Numberish
  'marker-mid'?: string
  'marker-start'?: string
  markerUnits?: Numberish
  markerWidth?: Numberish
  mask?: string
  maskContentUnits?: Numberish
  maskUnits?: Numberish
  mathematical?: Numberish
  mode?: Numberish
  numOctaves?: Numberish
  offset?: Numberish
  opacity?: Numberish
  operator?: Numberish
  order?: Numberish
  orient?: Numberish
  orientation?: Numberish
  origin?: Numberish
  overflow?: Numberish
  'overline-position'?: Numberish
  'overline-thickness'?: Numberish
  'paint-order'?: Numberish
  'panose-1'?: Numberish
  pathLength?: Numberish
  patternContentUnits?: string
  patternTransform?: Numberish
  patternUnits?: string
  'pointer-events'?: Numberish
  points?: string
  pointsAtX?: Numberish
  pointsAtY?: Numberish
  pointsAtZ?: Numberish
  preserveAlpha?: Numberish
  preserveAspectRatio?: string
  primitiveUnits?: Numberish
  r?: Numberish
  radius?: Numberish
  refX?: Numberish
  refY?: Numberish
  renderingIntent?: Numberish
  repeatCount?: Numberish
  repeatDur?: Numberish
  requiredExtensions?: Numberish
  requiredFeatures?: Numberish
  restart?: Numberish
  result?: string
  rotate?: Numberish
  rx?: Numberish
  ry?: Numberish
  scale?: Numberish
  seed?: Numberish
  'shape-rendering'?: Numberish
  slope?: Numberish
  spacing?: Numberish
  specularConstant?: Numberish
  specularExponent?: Numberish
  speed?: Numberish
  spreadMethod?: string
  startOffset?: Numberish
  stdDeviation?: Numberish
  stemh?: Numberish
  stemv?: Numberish
  stitchTiles?: Numberish
  'stop-color'?: string
  'stop-opacity'?: Numberish
  'strikethrough-position'?: Numberish
  'strikethrough-thickness'?: Numberish
  string?: Numberish
  stroke?: string
  'stroke-dasharray'?: Numberish
  'stroke-dashoffset'?: Numberish
  'stroke-linecap'?: 'butt' | 'round' | 'square' | 'inherit'
  'stroke-linejoin'?: 'miter' | 'round' | 'bevel' | 'inherit'
  'stroke-miterlimit'?: Numberish
  'stroke-opacity'?: Numberish
  'stroke-width'?: Numberish
  surfaceScale?: Numberish
  systemLanguage?: Numberish
  tableValues?: Numberish
  targetX?: Numberish
  targetY?: Numberish
  'text-anchor'?: string
  'text-decoration'?: Numberish
  textLength?: Numberish
  'text-rendering'?: Numberish
  to?: Numberish
  transform?: string
  u1?: Numberish
  u2?: Numberish
  'underline-position'?: Numberish
  'underline-thickness'?: Numberish
  unicode?: Numberish
  'unicode-bidi'?: Numberish
  'unicode-range'?: Numberish
  'unitsPer-em'?: Numberish
  'v-alphabetic'?: Numberish
  values?: string
  'vector-effect'?: Numberish
  version?: string
  'vert-adv-y'?: Numberish
  'vert-origin-x'?: Numberish
  'vert-origin-y'?: Numberish
  'v-hanging'?: Numberish
  'v-ideographic'?: Numberish
  viewBox?: string
  viewTarget?: Numberish
  visibility?: Numberish
  'v-mathematical'?: Numberish
  widths?: Numberish
  'word-spacing'?: Numberish
  'writing-mode'?: Numberish
  x1?: Numberish
  x2?: Numberish
  x?: Numberish
  xChannelSelector?: string
  'x-height'?: Numberish
  xlinkActuate?: string
  xlinkArcrole?: string
  xlinkHref?: string
  xlinkRole?: string
  xlinkShow?: string
  xlinkTitle?: string
  xlinkType?: string
  xmlns?: string
  y1?: Numberish
  y2?: Numberish
  y?: Numberish
  yChannelSelector?: string
  z?: Numberish
  zoomAndPan?: string
}
interface IntrinsicElementAttributes {
  a: AnchorHTMLAttributes
  abbr: HTMLAttributes
  address: HTMLAttributes
  area: AreaHTMLAttributes
  article: HTMLAttributes
  aside: HTMLAttributes
  audio: AudioHTMLAttributes
  b: HTMLAttributes
  base: BaseHTMLAttributes
  bdi: HTMLAttributes
  bdo: HTMLAttributes
  blockquote: BlockquoteHTMLAttributes
  body: HTMLAttributes
  br: HTMLAttributes
  button: ButtonHTMLAttributes
  canvas: CanvasHTMLAttributes
  caption: HTMLAttributes
  cite: HTMLAttributes
  code: HTMLAttributes
  col: ColHTMLAttributes
  colgroup: ColgroupHTMLAttributes
  data: DataHTMLAttributes
  datalist: HTMLAttributes
  dd: HTMLAttributes
  del: DelHTMLAttributes
  details: DetailsHTMLAttributes
  dfn: HTMLAttributes
  dialog: DialogHTMLAttributes
  div: HTMLAttributes
  dl: HTMLAttributes
  dt: HTMLAttributes
  em: HTMLAttributes
  embed: EmbedHTMLAttributes
  fieldset: FieldsetHTMLAttributes
  figcaption: HTMLAttributes
  figure: HTMLAttributes
  footer: HTMLAttributes
  form: FormHTMLAttributes
  h1: HTMLAttributes
  h2: HTMLAttributes
  h3: HTMLAttributes
  h4: HTMLAttributes
  h5: HTMLAttributes
  h6: HTMLAttributes
  head: HTMLAttributes
  header: HTMLAttributes
  hgroup: HTMLAttributes
  hr: HTMLAttributes
  html: HtmlHTMLAttributes
  i: HTMLAttributes
  iframe: IframeHTMLAttributes
  img: ImgHTMLAttributes
  input: InputHTMLAttributes
  ins: InsHTMLAttributes
  kbd: HTMLAttributes
  keygen: KeygenHTMLAttributes
  label: LabelHTMLAttributes
  legend: HTMLAttributes
  li: LiHTMLAttributes
  link: LinkHTMLAttributes
  main: HTMLAttributes
  map: MapHTMLAttributes
  mark: HTMLAttributes
  menu: MenuHTMLAttributes
  meta: MetaHTMLAttributes
  meter: MeterHTMLAttributes
  nav: HTMLAttributes
  noindex: HTMLAttributes
  noscript: HTMLAttributes
  object: ObjectHTMLAttributes
  ol: OlHTMLAttributes
  optgroup: OptgroupHTMLAttributes
  option: OptionHTMLAttributes
  output: OutputHTMLAttributes
  p: HTMLAttributes
  param: ParamHTMLAttributes
  picture: HTMLAttributes
  pre: HTMLAttributes
  progress: ProgressHTMLAttributes
  q: QuoteHTMLAttributes
  rp: HTMLAttributes
  rt: HTMLAttributes
  ruby: HTMLAttributes
  s: HTMLAttributes
  samp: HTMLAttributes
  script: ScriptHTMLAttributes
  section: HTMLAttributes
  select: SelectHTMLAttributes
  small: HTMLAttributes
  source: SourceHTMLAttributes
  span: HTMLAttributes
  strong: HTMLAttributes
  style: StyleHTMLAttributes
  sub: HTMLAttributes
  summary: HTMLAttributes
  sup: HTMLAttributes
  table: TableHTMLAttributes
  template: HTMLAttributes
  tbody: HTMLAttributes
  td: TdHTMLAttributes
  textarea: TextareaHTMLAttributes
  tfoot: HTMLAttributes
  th: ThHTMLAttributes
  thead: HTMLAttributes
  time: TimeHTMLAttributes
  title: HTMLAttributes
  tr: HTMLAttributes
  track: TrackHTMLAttributes
  u: HTMLAttributes
  ul: HTMLAttributes
  var: HTMLAttributes
  video: VideoHTMLAttributes
  wbr: HTMLAttributes
  webview: WebViewHTMLAttributes
  svg: SVGAttributes
  animate: SVGAttributes
  animateMotion: SVGAttributes
  animateTransform: SVGAttributes
  circle: SVGAttributes
  clipPath: SVGAttributes
  defs: SVGAttributes
  desc: SVGAttributes
  ellipse: SVGAttributes
  feBlend: SVGAttributes
  feColorMatrix: SVGAttributes
  feComponentTransfer: SVGAttributes
  feComposite: SVGAttributes
  feConvolveMatrix: SVGAttributes
  feDiffuseLighting: SVGAttributes
  feDisplacementMap: SVGAttributes
  feDistantLight: SVGAttributes
  feDropShadow: SVGAttributes
  feFlood: SVGAttributes
  feFuncA: SVGAttributes
  feFuncB: SVGAttributes
  feFuncG: SVGAttributes
  feFuncR: SVGAttributes
  feGaussianBlur: SVGAttributes
  feImage: SVGAttributes
  feMerge: SVGAttributes
  feMergeNode: SVGAttributes
  feMorphology: SVGAttributes
  feOffset: SVGAttributes
  fePointLight: SVGAttributes
  feSpecularLighting: SVGAttributes
  feSpotLight: SVGAttributes
  feTile: SVGAttributes
  feTurbulence: SVGAttributes
  filter: SVGAttributes
  foreignObject: SVGAttributes
  g: SVGAttributes
  image: SVGAttributes
  line: SVGAttributes
  linearGradient: SVGAttributes
  marker: SVGAttributes
  mask: SVGAttributes
  metadata: SVGAttributes
  mpath: SVGAttributes
  path: SVGAttributes
  pattern: SVGAttributes
  polygon: SVGAttributes
  polyline: SVGAttributes
  radialGradient: SVGAttributes
  rect: SVGAttributes
  stop: SVGAttributes
  switch: SVGAttributes
  symbol: SVGAttributes
  text: SVGAttributes
  textPath: SVGAttributes
  tspan: SVGAttributes
  use: SVGAttributes
  view: SVGAttributes
}
interface Events {
  onCopy: ClipboardEvent
  onCut: ClipboardEvent
  onPaste: ClipboardEvent
  onCompositionend: CompositionEvent
  onCompositionstart: CompositionEvent
  onCompositionupdate: CompositionEvent
  onDrag: DragEvent
  onDragend: DragEvent
  onDragenter: DragEvent
  onDragexit: DragEvent
  onDragleave: DragEvent
  onDragover: DragEvent
  onDragstart: DragEvent
  onDrop: DragEvent
  onFocus: FocusEvent
  onFocusin: FocusEvent
  onFocusout: FocusEvent
  onBlur: FocusEvent
  onChange: Event
  onBeforeinput: Event
  onInput: Event
  onReset: Event
  onSubmit: Event
  onInvalid: Event
  onLoad: Event
  onError: Event
  onKeydown: KeyboardEvent
  onKeypress: KeyboardEvent
  onKeyup: KeyboardEvent
  onAuxclick: MouseEvent
  onClick: MouseEvent
  onContextmenu: MouseEvent
  onDblclick: MouseEvent
  onMousedown: MouseEvent
  onMouseenter: MouseEvent
  onMouseleave: MouseEvent
  onMousemove: MouseEvent
  onMouseout: MouseEvent
  onMouseover: MouseEvent
  onMouseup: MouseEvent
  onAbort: Event
  onCanplay: Event
  onCanplaythrough: Event
  onDurationchange: Event
  onEmptied: Event
  onEncrypted: Event
  onEnded: Event
  onLoadeddata: Event
  onLoadedmetadata: Event
  onLoadstart: Event
  onPause: Event
  onPlay: Event
  onPlaying: Event
  onProgress: Event
  onRatechange: Event
  onSeeked: Event
  onSeeking: Event
  onStalled: Event
  onSuspend: Event
  onTimeupdate: Event
  onVolumechange: Event
  onWaiting: Event
  onSelect: Event
  onScroll: UIEvent
  onTouchcancel: TouchEvent
  onTouchend: TouchEvent
  onTouchmove: TouchEvent
  onTouchstart: TouchEvent
  onPointerdown: PointerEvent
  onPointermove: PointerEvent
  onPointerup: PointerEvent
  onPointercancel: PointerEvent
  onPointerenter: PointerEvent
  onPointerleave: PointerEvent
  onPointerover: PointerEvent
  onPointerout: PointerEvent
  onWheel: WheelEvent
  onAnimationstart: AnimationEvent
  onAnimationend: AnimationEvent
  onAnimationiteration: AnimationEvent
  onTransitionend: TransitionEvent
  onTransitionstart: TransitionEvent
}
type EventHandlers<E> = {
  [K in keyof E]?: E[K] extends (...args: any) => any
    ? E[K]
    : (payload: E[K]) => void
}
type ReservedProps = {
  key?: string | number | symbol
  ref?: VNodeData['ref']
  slot?: string
}
type ElementAttrs<T> = T & ReservedProps
type NativeElements = {
  [K in keyof IntrinsicElementAttributes]: ElementAttrs<
    IntrinsicElementAttributes[K]
  >
}

declare global {
  // namespace JSX {
  //   interface Element extends VNode {}
  //   interface ElementClass {
  //     $props: {}
  //   }
  //   interface ElementAttributesProperty {
  //     $props: {}
  //   }
  //   interface IntrinsicElements extends NativeElements {
  //     [name: string]: any
  //   }
  //   interface IntrinsicAttributes
  //     extends ReservedProps,
  //       AllowedComponentProps,
  //       ComponentCustomProps {}
  // }
}

declare type BaseTypes = string | number | boolean;
declare type CollectionTypes = IterableCollections | WeakCollections;
declare type DebuggerEvent = {
} & DebuggerEventExtraInfo;
declare type DebuggerEventExtraInfo = {
    target: object;
    type: TrackOpTypes | TriggerOpTypes;
    key?: any;
    newValue?: any;
    oldValue?: any;
};
declare type IterableCollections = Map<any, any> | Set<any>;
declare function nextTick(): Promise<void>;
declare function nextTick<T>(this: T, cb: (this: T, ...args: any[]) => any): void;
declare function nextTick<T>(cb: (this: T, ...args: any[]) => any, ctx: T): void;
declare const RawSymbol: unique symbol;
declare interface Ref<T = any> {
    value: T;
    [RefSymbol]: true;
}
declare const RefSymbol: unique symbol;
declare interface RefUnwrapBailTypes {
    runtimeDOMBailTypes: Node | Window;
}
declare const ShallowReactiveMarker: unique symbol;
declare type ShallowRef<T = any> = Ref<T> & {
    [ShallowRefMarker]?: true;
};
declare const ShallowRefMarker: unique symbol;
declare type ShallowUnwrapRef<T> = {
    [K in keyof T]: T[K] extends Ref<infer V> ? V : T[K] extends Ref<infer V> | undefined ? unknown extends V ? undefined : V | undefined : T[K];
};
declare const enum TrackOpTypes {
    GET = "get",
    TOUCH = "touch"
}
declare const enum TriggerOpTypes {
    SET = "set",
    ADD = "add",
    DELETE = "delete",
    ARRAY_MUTATION = "array mutation"
}
declare type UnwrapNestedRefs<T> = T extends Ref ? T : UnwrapRefSimple<T>;
declare type UnwrapRef<T> = T extends ShallowRef<infer V> ? V : T extends Ref<infer V> ? UnwrapRefSimple<V> : UnwrapRefSimple<T>;
declare type UnwrapRefSimple<T> = T extends Function | CollectionTypes | BaseTypes | Ref | RefUnwrapBailTypes[keyof RefUnwrapBailTypes] | {
    [RawSymbol]?: true;
} ? T : T extends Array<any> ? {
    [K in keyof T]: UnwrapRefSimple<T[K]>;
} : T extends object & {
    [ShallowReactiveMarker]?: never;
} ? {
    [P in keyof T]: P extends symbol ? T[P] : UnwrapRef<T[P]>;
} : T;
declare type WeakCollections = WeakMap<any, any> | WeakSet<any>;

type Data = { [key: string]: unknown }
type UnionToIntersection<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never
type IfAny<T, Y, N> = 0 extends 1 & T ? Y : N
type LooseRequired<T> = { [P in string & keyof T]: T[P] }

type Slot = (...args: any[]) => VNode[]
type Slots = Record<string, Slot | undefined>
type ObjectEmitsOptions = Record<
  string,
  ((...args: any[]) => any) | null
>
type EmitsOptions = ObjectEmitsOptions | string[]
type EmitFn<
  Options = ObjectEmitsOptions,
  Event extends keyof Options = keyof Options,
  ReturnType extends void | Vue = void
> = Options extends Array<infer V>
  ? (event: V, ...args: any[]) => ReturnType
  : {} extends Options
  ? (event: string, ...args: any[]) => ReturnType
  : UnionToIntersection<
      {
        [key in Event]: Options[key] extends (...args: infer Args) => any
          ? (event: key, ...args: Args) => ReturnType
          : (event: key, ...args: any[]) => ReturnType
      }[Event]
    >
interface SetupContext<E extends EmitsOptions = {}> {
  attrs: Data
  listeners: Record<string, Function | Function[]>
  slots: Slots
  emit: EmitFn<E>
  expose(exposed?: Record<string, any>): void
}

type ComponentPropsOptions<P = Data> =
  | ComponentObjectPropsOptions<P>
  | string[]
type ComponentObjectPropsOptions<P = Data> = {
  [K in keyof P]: Prop$1<P[K]> | null
}
type Prop$1<T, D = T> = PropOptions$1<T, D> | PropType$1<T>
type DefaultFactory<T> = () => T | null | undefined
interface PropOptions$1<T = any, D = T> {
  type?: PropType$1<T> | true | null
  required?: boolean
  default?: D | DefaultFactory<D> | null | undefined | object
  validator?(value: unknown): boolean
}
type PropType$1<T> = PropConstructor<T> | PropConstructor<T>[]
type PropConstructor<T> =
  | { (): T }
  | { new (...args: never[]): T & object }
  | { new (...args: string[]): Function }
type RequiredKeys<T> = {
  [K in keyof T]: T[K] extends
    | { required: true }
    | { default: any }
    | BooleanConstructor
    | { type: BooleanConstructor }
    ? K
    : never
}[keyof T]
type OptionalKeys<T> = Exclude<keyof T, RequiredKeys<T>>
type InferPropType<T> = [T] extends [null]
  ? any
  : [T] extends [{ type: null | true }]
  ? any
  : [T] extends [ObjectConstructor | { type: ObjectConstructor }]
  ? Record<string, any>
  : [T] extends [BooleanConstructor | { type: BooleanConstructor }]
  ? boolean
  : [T] extends [DateConstructor | { type: DateConstructor }]
  ? Date
  : [T] extends [(infer U)[] | { type: (infer U)[] }]
  ? U extends DateConstructor
    ? Date | InferPropType<U>
    : InferPropType<U>
  : [T] extends [Prop$1<infer V, infer D>]
  ? unknown extends V
    ? IfAny<V, V, D>
    : V
  : T
type ExtractPropTypes<O> = {
  [K in keyof Pick<O, RequiredKeys<O>>]: InferPropType<O[K]>
} & {
  [K in keyof Pick<O, OptionalKeys<O>>]?: InferPropType<O[K]>
}
type DefaultKeys<T> = {
  [K in keyof T]: T[K] extends
    | {
        default: any
      }
    | BooleanConstructor
    | { type: BooleanConstructor }
    ? T[K] extends {
        type: BooleanConstructor
        required: true
      }
      ? never
      : K
    : never
}[keyof T]
type ExtractDefaultPropTypes<O> = O extends object
  ?
    { [K in keyof Pick<O, DefaultKeys<O>>]: InferPropType<O[K]> }
  : {}

interface ComponentCustomOptions {}
type ComputedGetter<T> = (ctx?: any) => T
type ComputedSetter<T> = (v: T) => void
interface WritableComputedOptions<T> {
  get: ComputedGetter<T>
  set: ComputedSetter<T>
}
type ComputedOptions$1 = Record<
  string,
  ComputedGetter<any> | WritableComputedOptions<any>
>
interface MethodOptions {
  [key: string]: Function
}
type SetupFunction<
  Props,
  RawBindings = {},
  Emits extends EmitsOptions = {}
> = (
  this: void,
  props: Readonly<Props>,
  ctx: SetupContext<Emits>
) => RawBindings | (() => VNode | null) | void
type ExtractOptionProp<T> = T extends ComponentOptionsBase<
  infer P,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any
>
  ? unknown extends P
    ? {}
    : P
  : {}
interface ComponentOptionsBase<
  Props,
  RawBindings,
  D,
  C extends ComputedOptions$1,
  M extends MethodOptions,
  Mixin extends ComponentOptionsMixin,
  Extends extends ComponentOptionsMixin,
  Emits extends EmitsOptions,
  EmitNames extends string = string,
  Defaults = {}
> extends Omit<
      ComponentOptions<Vue, D, M, C, Props>,
      'data' | 'computed' | 'methods' | 'setup' | 'props' | 'mixins' | 'extends'
    >,
    ComponentCustomOptions {
  [key: string]: any
  data?: (
    this: CreateComponentPublicInstance<Props, {}, {}, {}, M, Mixin, Extends>,
    vm: CreateComponentPublicInstance<Props, {}, {}, {}, M, Mixin, Extends>
  ) => D
  computed?: C
  methods?: M
  mixins?: Mixin[]
  extends?: Extends
  emits?: (Emits | EmitNames[]) & ThisType<void>
  setup?: SetupFunction<
    Readonly<
      LooseRequired<
        Props &
          UnionToIntersection<ExtractOptionProp<Mixin>> &
          UnionToIntersection<ExtractOptionProp<Extends>>
      >
    >,
    RawBindings,
    Emits
  >
  __defaults?: Defaults
}
type ComponentOptionsMixin = ComponentOptionsBase<
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any
>
type ExtractComputedReturns<T extends any> = {
  [key in keyof T]: T[key] extends { get: (...args: any[]) => infer TReturn }
    ? TReturn
    : T[key] extends (...args: any[]) => infer TReturn
    ? TReturn
    : never
}

interface ComponentCustomProperties {}
type OptionTypesKeys = 'P' | 'B' | 'D' | 'C' | 'M' | 'Defaults'
type OptionTypesType<
  P = {},
  B = {},
  D = {},
  C extends ComputedOptions$1 = {},
  M extends MethodOptions = {},
  Defaults = {}
> = {
  P: P
  B: B
  D: D
  C: C
  M: M
  Defaults: Defaults
}
type IsDefaultMixinComponent<T> = T extends ComponentOptionsMixin
  ? ComponentOptionsMixin extends T
    ? true
    : false
  : false
type MixinToOptionTypes<T> = T extends ComponentOptionsBase<
  infer P,
  infer B,
  infer D,
  infer C,
  infer M,
  infer Mixin,
  infer Extends,
  any,
  any,
  infer Defaults
>
  ? OptionTypesType<P & {}, B & {}, D & {}, C & {}, M & {}, Defaults & {}> &
      IntersectionMixin<Mixin> &
      IntersectionMixin<Extends>
  : never
type ExtractMixin<T> = {
  Mixin: MixinToOptionTypes<T>
}[T extends ComponentOptionsMixin ? 'Mixin' : never]
type IntersectionMixin<T> = IsDefaultMixinComponent<T> extends true
  ? OptionTypesType<{}, {}, {}, {}, {}, {}>
  : UnionToIntersection<ExtractMixin<T>>
type UnwrapMixinsType<
  T,
  Type extends OptionTypesKeys
> = T extends OptionTypesType ? T[Type] : never
type EnsureNonVoid<T> = T extends void ? {} : T
type CreateComponentPublicInstance<
  P = {},
  B = {},
  D = {},
  C extends ComputedOptions$1 = {},
  M extends MethodOptions = {},
  Mixin extends ComponentOptionsMixin = ComponentOptionsMixin,
  Extends extends ComponentOptionsMixin = ComponentOptionsMixin,
  E extends EmitsOptions = {},
  PublicProps = P,
  Defaults = {},
  MakeDefaultsOptional extends boolean = false,
  PublicMixin = IntersectionMixin<Mixin> & IntersectionMixin<Extends>,
  PublicP = UnwrapMixinsType<PublicMixin, 'P'> & EnsureNonVoid<P>,
  PublicB = UnwrapMixinsType<PublicMixin, 'B'> & EnsureNonVoid<B>,
  PublicD = UnwrapMixinsType<PublicMixin, 'D'> & EnsureNonVoid<D>,
  PublicC extends ComputedOptions$1 = UnwrapMixinsType<PublicMixin, 'C'> &
    EnsureNonVoid<C>,
  PublicM extends MethodOptions = UnwrapMixinsType<PublicMixin, 'M'> &
    EnsureNonVoid<M>,
  PublicDefaults = UnwrapMixinsType<PublicMixin, 'Defaults'> &
    EnsureNonVoid<Defaults>
> = ComponentPublicInstance<
  PublicP,
  PublicB,
  PublicD,
  PublicC,
  PublicM,
  E,
  PublicProps,
  PublicDefaults,
  MakeDefaultsOptional
>
type ComponentPublicInstance<
  P = {},
  B = {},
  D = {},
  C extends ComputedOptions$1 = {},
  M extends MethodOptions = {},
  E extends EmitsOptions = {},
  PublicProps = P,
  Defaults = {},
  MakeDefaultsOptional extends boolean = false,
  Options = ComponentOptionsBase<
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any
  >
> = Vue3Instance<
  D,
  P,
  PublicProps,
  E,
  Defaults,
  MakeDefaultsOptional,
  Options
> &
  Readonly<P> &
  ShallowUnwrapRef<B> &
  UnwrapNestedRefs<D> &
  ExtractComputedReturns<C> &
  M &
  ComponentCustomProperties
interface Vue3Instance<
  D,
  P,
  PublicProps,
  E,
  Defaults,
  MakeDefaultsOptional,
  Options
> extends Vue<
    D,
    Readonly<
      MakeDefaultsOptional extends true
        ? Partial<Defaults> & Omit<P & PublicProps, keyof Defaults>
        : P & PublicProps
    >,
    ComponentPublicInstance,
    Options & MergedComponentOptionsOverride,
    EmitFn<E>
  > {}
type MergedHook<T = () => void> = T | T[]
type MergedComponentOptionsOverride = {
  beforeCreate?: MergedHook
  created?: MergedHook
  beforeMount?: MergedHook
  mounted?: MergedHook
  beforeUpdate?: MergedHook
  updated?: MergedHook
  activated?: MergedHook
  deactivated?: MergedHook
  beforeDestroy?: MergedHook
  beforeUnmount?: MergedHook
  destroyed?: MergedHook
  unmounted?: MergedHook
  renderTracked?: MergedHook<DebuggerHook>
  renderTriggered?: MergedHook<DebuggerHook>
  errorCaptured?: MergedHook<ErrorCapturedHook>
}
type DebuggerHook = (e: DebuggerEvent) => void
type ErrorCapturedHook<TError = unknown> = (
  err: TError,
  instance: ComponentPublicInstance | null,
  info: string
) => boolean | void
type ComponentPublicInstanceConstructor<
  T extends ComponentPublicInstance<
    Props,
    RawBindings,
    D,
    C,
    M
  > = ComponentPublicInstance<any, any, any>,
  Props = any,
  RawBindings = any,
  D = any,
  C extends ComputedOptions$1 = ComputedOptions$1,
  M extends MethodOptions = MethodOptions
> = {
  new (...args: any[]): T
}

interface ComponentCustomProps {}
interface AllowedComponentProps {
  class?: unknown
  style?: unknown
}
type ScopedSlot = (props: any) => ScopedSlotReturnValue
type ScopedSlotReturnValue =
  | VNode
  | string
  | boolean
  | null
  | undefined
  | ScopedSlotReturnArray
interface ScopedSlotReturnArray extends Array<ScopedSlotReturnValue> {}
type NormalizedScopedSlot = (props: any) => ScopedSlotChildren
type ScopedSlotChildren = VNode[] | undefined
type VNodeChildren =
  | VNodeChildrenArrayContents
  | [ScopedSlot]
  | string
  | boolean
  | null
  | undefined
interface VNodeChildrenArrayContents
  extends Array<VNodeChildren | VNode> {}
interface VNode {
  tag?: string
  data?: VNodeData
  children?: VNode[]
  text?: string
  elm?: Node
  ns?: string
  context?: Vue
  key?: string | number | symbol | boolean
  componentOptions?: VNodeComponentOptions
  componentInstance?: Vue
  parent?: VNode
  raw?: boolean
  isStatic?: boolean
  isRootInsert: boolean
  isComment: boolean
}
interface VNodeComponentOptions {
  Ctor: typeof Vue
  propsData?: object
  listeners?: object
  children?: VNode[]
  tag?: string
}
type VNodeRef =
  | string
  | Ref
  | ((
      ref: Element | ComponentPublicInstance | null,
      refs: Record<string, any>
    ) => void)
interface VNodeData {
  key?: string | number
  slot?: string
  scopedSlots?: { [key: string]: ScopedSlot | undefined }
  ref?: VNodeRef
  refInFor?: boolean
  tag?: string
  staticClass?: string
  class?: any
  staticStyle?: { [key: string]: any }
  style?: StyleValue
  props?: { [key: string]: any }
  attrs?: { [key: string]: any }
  domProps?: { [key: string]: any }
  hook?: { [key: string]: Function }
  on?: { [key: string]: Function | Function[] }
  nativeOn?: { [key: string]: Function | Function[] }
  transition?: object
  show?: boolean
  inlineTemplate?: {
    render: Function
    staticRenderFns: Function[]
  }
  directives?: VNodeDirective[]
  keepAlive?: boolean
}
interface VNodeDirective {
  name: string
  value?: any
  oldValue?: any
  expression?: string
  arg?: string
  oldArg?: string
  modifiers?: { [key: string]: boolean }
  def?: DirectiveFunction | DirectiveOptions
}

type PluginFunction<T> = (vue: typeof Vue, options?: T) => void
interface PluginObject<T> {
  install: PluginFunction<T>
  [key: string]: any
}

type DirectiveModifiers = Record<string, boolean>
interface DirectiveBinding$1<V> extends Readonly<VNodeDirective> {
  readonly modifiers: DirectiveModifiers
  readonly value: V
  readonly oldValue: V | null
}
type DirectiveHook<T = any, Prev = VNode | null, V = any> = (
  el: T,
  binding: DirectiveBinding$1<V>,
  vnode: VNode,
  prevVNode: Prev
) => void
interface ObjectDirective<T = any, V = any> {
  bind?: DirectiveHook<T, any, V>
  inserted?: DirectiveHook<T, any, V>
  update?: DirectiveHook<T, any, V>
  componentUpdated?: DirectiveHook<T, any, V>
  unbind?: DirectiveHook<T, any, V>
}
type FunctionDirective<T = any, V = any> = DirectiveHook<T, any, V>
type Directive<T = any, V = any> =
  | ObjectDirective<T, V>
  | FunctionDirective<T, V>

type DefineComponent<
  PropsOrPropOptions = {},
  RawBindings = {},
  D = {},
  C extends ComputedOptions$1 = ComputedOptions$1,
  M extends MethodOptions = MethodOptions,
  Mixin extends ComponentOptionsMixin = ComponentOptionsMixin,
  Extends extends ComponentOptionsMixin = ComponentOptionsMixin,
  E extends EmitsOptions = {},
  EE extends string = string,
  Props = Readonly<
    PropsOrPropOptions extends ComponentPropsOptions
      ? ExtractPropTypes<PropsOrPropOptions>
      : PropsOrPropOptions
  >,
  Defaults = ExtractDefaultPropTypes<PropsOrPropOptions>
> = ComponentPublicInstanceConstructor<
  CreateComponentPublicInstance<
    Props,
    RawBindings,
    D,
    C,
    M,
    Mixin,
    Extends,
    E,
    Props,
    Defaults,
    true
  > &
    Props
> &
  ComponentOptionsBase<
    Props,
    RawBindings,
    D,
    C,
    M,
    Mixin,
    Extends,
    E,
    EE,
    Defaults
  > & {
    props: PropsOrPropOptions
  }

type Component<
  Data = DefaultData<never>,
  Methods = DefaultMethods<never>,
  Computed = DefaultComputed,
  Props = DefaultProps,
  SetupBindings = {}
> =
  | typeof Vue
  | FunctionalComponentOptions<Props>
  | ComponentOptions<never, Data, Methods, Computed, Props, SetupBindings>
  | DefineComponent<any, any, any, any, any, any, any, any, any, any, any>
type EsModule<T> = T | { default: T }
type ImportedComponent<
  Data = DefaultData<never>,
  Methods = DefaultMethods<never>,
  Computed = DefaultComputed,
  Props = DefaultProps,
  SetupBindings = {}
> = EsModule<Component<Data, Methods, Computed, Props, SetupBindings>>
type AsyncComponent<
  Data = DefaultData<never>,
  Methods = DefaultMethods<never>,
  Computed = DefaultComputed,
  Props = DefaultProps,
  SetupBindings = {}
> =
  | AsyncComponentPromise<Data, Methods, Computed, Props, SetupBindings>
  | AsyncComponentFactory<Data, Methods, Computed, Props, SetupBindings>
type AsyncComponentPromise<
  Data = DefaultData<never>,
  Methods = DefaultMethods<never>,
  Computed = DefaultComputed,
  Props = DefaultProps,
  SetupBindings = {}
> = (
  resolve: (
    component: Component<Data, Methods, Computed, Props, SetupBindings>
  ) => void,
  reject: (reason?: any) => void
) => Promise<
  ImportedComponent<Data, Methods, Computed, Props, SetupBindings>
> | void
type AsyncComponentFactory<
  Data = DefaultData<never>,
  Methods = DefaultMethods<never>,
  Computed = DefaultComputed,
  Props = DefaultProps,
  SetupBindings = {}
> = () => {
  component: Promise<
    ImportedComponent<Data, Methods, Computed, Props, SetupBindings>
  >
  loading?: ImportedComponent
  error?: ImportedComponent
  delay?: number
  timeout?: number
}
type Accessors<T> = {
  [K in keyof T]: (() => T[K]) | ComputedOptions<T[K]>
}
type DataDef<Data, Props, V> = Data | ((this: Readonly<Props> & V) => Data)
type ThisTypedComponentOptionsWithArrayProps<
  V extends Vue,
  Data,
  Methods,
  Computed,
  PropNames extends string,
  SetupBindings,
  Mixin extends ComponentOptionsMixin,
  Extends extends ComponentOptionsMixin
> = object &
  ComponentOptions<
    V,
    DataDef<Data, Record<PropNames, any>, V>,
    Methods,
    Computed,
    PropNames[],
    Record<PropNames, any>,
    SetupBindings,
    Mixin,
    Extends
  > &
  ThisType<
    CombinedVueInstance<
      V,
      Data,
      Methods,
      Computed,
      Readonly<Record<PropNames, any>>,
      SetupBindings,
      Mixin,
      Extends
    >
  >
type ThisTypedComponentOptionsWithRecordProps<
  V extends Vue,
  Data,
  Methods,
  Computed,
  Props,
  SetupBindings,
  Mixin extends ComponentOptionsMixin,
  Extends extends ComponentOptionsMixin
> = object &
  ComponentOptions<
    V,
    DataDef<Data, Props, V>,
    Methods,
    Computed,
    RecordPropsDefinition<Props>,
    Props,
    SetupBindings,
    Mixin,
    Extends
  > &
  ThisType<
    CombinedVueInstance<
      V,
      Data,
      Methods,
      Computed,
      Readonly<Props>,
      SetupBindings,
      Mixin,
      Extends
    >
  >
type DefaultData<V> = object | ((this: V) => object)
type DefaultProps = Record<string, any>
type DefaultMethods<V> = { [key: string]: (this: V, ...args: any[]) => any }
type DefaultComputed = { [key: string]: any }
interface ComponentOptions<
  V extends Vue,
  Data = DefaultData<V>,
  Methods = DefaultMethods<V>,
  Computed = DefaultComputed,
  PropsDef = PropsDefinition<DefaultProps>,
  Props = DefaultProps,
  RawBindings = {},
  Mixin extends ComponentOptionsMixin = ComponentOptionsMixin,
  Extends extends ComponentOptionsMixin = ComponentOptionsMixin
> {
  data?: Data
  props?: PropsDef
  propsData?: object
  computed?: Accessors<Computed>
  methods?: Methods
  watch?: Record<string, WatchOptionsWithHandler<any> | WatchHandler<any> | Array<WatchOptionsWithHandler<any> | WatchHandler<any>>>
  setup?: (
    this: void,
    props: Props,
    ctx: SetupContext
  ) => Promise<RawBindings> | RawBindings | ((h: CreateElement) => VNode) | void
  el?: Element | string
  template?: string
  render?(
    createElement: CreateElement,
    hack: RenderContext<Props>
  ): VNode | null | void
  renderError?(createElement: CreateElement, err: Error): VNode
  staticRenderFns?: ((createElement: CreateElement) => VNode)[]
  beforeCreate?(this: V): void
  created?(): void
  beforeDestroy?(): void
  destroyed?(): void
  beforeMount?(): void
  mounted?(): void
  beforeUpdate?(): void
  updated?(): void
  activated?(): void
  deactivated?(): void
  errorCaptured?(err: Error, vm: Vue, info: string): boolean | void
  serverPrefetch?(this: V): Promise<void>
  renderTracked?(e: DebuggerEvent): void
  renderTriggerd?(e: DebuggerEvent): void
  directives?: { [key: string]: DirectiveFunction | DirectiveOptions }
  components?: {
    [key: string]:
      | {}
      | Component<any, any, any, any, any>
      | AsyncComponent<any, any, any, any>
  }
  transitions?: { [key: string]: object }
  filters?: { [key: string]: Function }
  provide?: object | (() => object)
  inject?: InjectOptions
  model?: {
    prop?: string
    event?: string
  }
  parent?: Vue
  mixins?: (Mixin | ComponentOptions<Vue> | typeof Vue)[]
  name?: string
  __name?: string
  extends?: Extends | ComponentOptions<Vue> | typeof Vue
  delimiters?: [string, string]
  comments?: boolean
  inheritAttrs?: boolean
}
interface FunctionalComponentOptions<
  Props = DefaultProps,
  PropDefs = PropsDefinition<Props>
> {
  name?: string
  props?: PropDefs
  model?: {
    prop?: string
    event?: string
  }
  inject?: InjectOptions
  functional: boolean
  render?(
    this: undefined,
    createElement: CreateElement,
    context: RenderContext<Props>
  ): VNode | VNode[]
}
interface RenderContext<Props = DefaultProps> {
  props: Props
  children: VNode[]
  slots(): any
  data: VNodeData
  parent: Vue
  listeners: { [key: string]: Function | Function[] }
  scopedSlots: { [key: string]: NormalizedScopedSlot }
  injections: any
}
type Prop<T> =
  | { (): T }
  | { new (...args: never[]): T & object }
  | { new (...args: string[]): Function }
type PropType<T> = Prop<T> | Prop<T>[]
type PropValidator<T> = PropOptions<T> | PropType<T>
interface PropOptions<T = any> {
  type?: PropType<T>
  required?: boolean
  default?: T | null | undefined | (() => T | null | undefined)
  validator?(value: unknown): boolean
}
type RecordPropsDefinition<T> = {
  [K in keyof T]: PropValidator<T[K]>
}
type ArrayPropsDefinition<T> = (keyof T)[]
type PropsDefinition<T> =
  | ArrayPropsDefinition<T>
  | RecordPropsDefinition<T>
interface ComputedOptions<T> {
  get?(): T
  set?(value: T): void
  cache?: boolean
}
type WatchHandler<T> = string | ((val: T, oldVal: T) => void)
interface WatchOptions {
  deep?: boolean
  immediate?: boolean
}
interface WatchOptionsWithHandler<T> extends WatchOptions {
  handler: WatchHandler<T>
}
interface DirectiveBinding extends Readonly<VNodeDirective> {
  readonly modifiers: { [key: string]: boolean }
}
type DirectiveFunction = (
  el: HTMLElement,
  binding: DirectiveBinding,
  vnode: VNode,
  oldVnode: VNode
) => void
interface DirectiveOptions {
  bind?: DirectiveFunction
  inserted?: DirectiveFunction
  update?: DirectiveFunction
  componentUpdated?: DirectiveFunction
  unbind?: DirectiveFunction
}
type InjectKey = string | symbol
type InjectOptions =
  | {
      [key: string]: InjectKey | { from?: InjectKey; default?: any }
    }
  | string[]

interface CreateElement {
  (
    tag?:
      | string
      | Component<any, any, any, any>
      | AsyncComponent<any, any, any, any>
      | (() => Component),
    children?: VNodeChildren
  ): VNode
  (
    tag?:
      | string
      | Component<any, any, any, any>
      | AsyncComponent<any, any, any, any>
      | (() => Component),
    data?: VNodeData,
    children?: VNodeChildren
  ): VNode
}
type NeverFallback<T, D> = [T] extends [never] ? D : T
type CombinedVueInstance<
  Instance extends Vue,
  Data,
  Methods,
  Computed,
  Props,
  SetupBindings = {},
  Mixin extends ComponentOptionsMixin = ComponentOptionsMixin,
  Extends extends ComponentOptionsMixin = ComponentOptionsMixin,
  PublicMixin = IntersectionMixin<Mixin> & IntersectionMixin<Extends>
> = UnwrapNestedRefs<UnwrapMixinsType<PublicMixin, 'D'>> &
  Data &
  UnwrapMixinsType<PublicMixin, 'M'> &
  Methods &
  ExtractComputedReturns<UnwrapMixinsType<PublicMixin, 'C'>> &
  Computed &
  UnwrapMixinsType<PublicMixin, 'P'> &
  Props &
  Instance &
  ShallowUnwrapRef<UnwrapMixinsType<PublicMixin, 'B'>> &
  (SetupBindings extends void ? {} : SetupBindings)
type ExtendedVue<
  Instance extends Vue,
  Data,
  Methods,
  Computed,
  Props,
  SetupBindings = {},
  Mixin extends ComponentOptionsMixin = ComponentOptionsMixin,
  Extends extends ComponentOptionsMixin = ComponentOptionsMixin
> = VueConstructor<
  CombinedVueInstance<
    Instance,
    Data,
    Methods,
    Computed,
    Props,
    SetupBindings,
    Mixin,
    Extends
  > &
    Vue
>
interface VueConfiguration {
  silent: boolean
  optionMergeStrategies: any
  devtools: boolean
  productionTip: boolean
  performance: boolean
  errorHandler(err: Error, vm: Vue, info: string): void
  warnHandler(msg: string, vm: Vue, trace: string): void
  ignoredElements: (string | RegExp)[]
  keyCodes: { [key: string]: number | number[] }
  async: boolean
}
interface VueConstructor<V extends Vue = Vue> {
  new <
    Data = object,
    Methods = object,
    Computed = object,
    PropNames extends string = never,
    SetupBindings = {},
    Mixin extends ComponentOptionsMixin = ComponentOptionsMixin,
    Extends extends ComponentOptionsMixin = ComponentOptionsMixin
  >(
    options?: ThisTypedComponentOptionsWithArrayProps<
      V,
      Data,
      Methods,
      Computed,
      PropNames,
      SetupBindings,
      Mixin,
      Extends
    >
  ): CombinedVueInstance<
    V,
    Data,
    Methods,
    Computed,
    Record<PropNames, any>,
    SetupBindings,
    Mixin,
    Extends
  >
  new <
    Data = object,
    Methods = object,
    Computed = object,
    Props = object,
    SetupBindings = {},
    Mixin extends ComponentOptionsMixin = ComponentOptionsMixin,
    Extends extends ComponentOptionsMixin = ComponentOptionsMixin
  >(
    options?: ThisTypedComponentOptionsWithRecordProps<
      V,
      Data,
      Methods,
      Computed,
      Props,
      SetupBindings,
      Mixin,
      Extends
    >
  ): CombinedVueInstance<
    V,
    Data,
    Methods,
    Computed,
    Record<keyof Props, any>,
    SetupBindings,
    Mixin,
    Extends
  >
  new (options?: ComponentOptions<V>): CombinedVueInstance<
    V,
    object,
    object,
    object,
    Record<keyof object, any>,
    {}
  >
  extend<
    Data,
    Methods,
    Computed,
    PropNames extends string = never,
    SetupBindings = {},
    Mixin extends ComponentOptionsMixin = ComponentOptionsMixin,
    Extends extends ComponentOptionsMixin = ComponentOptionsMixin
  >(
    options?: ThisTypedComponentOptionsWithArrayProps<
      V,
      Data,
      Methods,
      Computed,
      PropNames,
      SetupBindings,
      Mixin,
      Extends
    >
  ): ExtendedVue<
    V,
    Data,
    Methods,
    Computed,
    Record<PropNames, any>,
    SetupBindings,
    Mixin,
    Extends
  >
  extend<
    Data,
    Methods,
    Computed,
    Props,
    SetupBindings = {},
    Mixin extends ComponentOptionsMixin = ComponentOptionsMixin,
    Extends extends ComponentOptionsMixin = ComponentOptionsMixin
  >(
    options?: ThisTypedComponentOptionsWithRecordProps<
      V,
      Data,
      Methods,
      Computed,
      Props,
      SetupBindings,
      Mixin,
      Extends
    >
  ): ExtendedVue<
    V,
    Data,
    Methods,
    Computed,
    Props,
    SetupBindings,
    Mixin,
    Extends
  >
  extend<PropNames extends string = never>(
    definition: FunctionalComponentOptions<Record<PropNames, any>, PropNames[]>
  ): ExtendedVue<V, {}, {}, {}, Record<PropNames, any>, {}>
  extend<Props>(
    definition: FunctionalComponentOptions<Props, RecordPropsDefinition<Props>>
  ): ExtendedVue<V, {}, {}, {}, Props, {}>
  extend(options?: ComponentOptions<V>): ExtendedVue<V, {}, {}, {}, {}, {}>
  nextTick<T>(callback: (this: T) => void, context?: T): void
  nextTick(): Promise<void>
  set<T>(object: object, key: string | number, value: T): T
  set<T>(array: T[], key: number, value: T): T
  delete(object: object, key: string | number): void
  delete<T>(array: T[], key: number): void
  directive(
    id: string,
    definition?: DirectiveOptions | DirectiveFunction
  ): DirectiveOptions
  directive(
    id: string,
    definition?: Directive
  ): ObjectDirective
  filter(id: string, definition?: Function): Function
  component(id: string): VueConstructor
  component<VC extends VueConstructor>(id: string, constructor: VC): VC
  component<Data, Methods, Computed, Props, SetupBindings>(
    id: string,
    definition: AsyncComponent<Data, Methods, Computed, Props>
  ): ExtendedVue<V, Data, Methods, Computed, Props, SetupBindings>
  component<
    Data,
    Methods,
    Computed,
    PropNames extends string = never,
    SetupBindings = {},
    Mixin extends ComponentOptionsMixin = ComponentOptionsMixin,
    Extends extends ComponentOptionsMixin = ComponentOptionsMixin
  >(
    id: string,
    definition?: ThisTypedComponentOptionsWithArrayProps<
      V,
      Data,
      Methods,
      Computed,
      PropNames,
      SetupBindings,
      Mixin,
      Extends
    >
  ): ExtendedVue<
    V,
    Data,
    Methods,
    Computed,
    Record<PropNames, any>,
    SetupBindings,
    Mixin,
    Extends
  >
  component<
    Data,
    Methods,
    Computed,
    Props,
    SetupBindings,
    Mixin extends ComponentOptionsMixin = ComponentOptionsMixin,
    Extends extends ComponentOptionsMixin = ComponentOptionsMixin
  >(
    id: string,
    definition?: ThisTypedComponentOptionsWithRecordProps<
      V,
      Data,
      Methods,
      Computed,
      Props,
      SetupBindings,
      Mixin,
      Extends
    >
  ): ExtendedVue<V, Data, Methods, Computed, Props, SetupBindings>
  component<PropNames extends string>(
    id: string,
    definition: FunctionalComponentOptions<Record<PropNames, any>, PropNames[]>
  ): ExtendedVue<V, {}, {}, {}, Record<PropNames, any>, {}>
  component<Props>(
    id: string,
    definition: FunctionalComponentOptions<Props, RecordPropsDefinition<Props>>
  ): ExtendedVue<V, {}, {}, {}, Props, {}>
  component(
    id: string,
    definition?: ComponentOptions<V>
  ): ExtendedVue<V, {}, {}, {}, {}, {}>
  component<T extends DefineComponent<any, any, any, any, any, any, any, any>>(
    id: string,
    definition?: T
  ): T
  use<T>(
    plugin: PluginObject<T> | PluginFunction<T>,
    options?: T
  ): VueConstructor<V>
  use(
    plugin: PluginObject<any> | PluginFunction<any>,
    ...options: any[]
  ): VueConstructor<V>
  mixin(mixin: VueConstructor | ComponentOptions<Vue>): VueConstructor<V>
  compile(template: string): {
    render(createElement: typeof Vue.prototype.$createElement): VNode
    staticRenderFns: (() => VNode)[]
  }
  observable<T>(obj: T): T
  util: {
    warn(msg: string, vm?: InstanceType<VueConstructor>): void
  }
  config: VueConfiguration
  version: string
}
interface Vue<
  Data = Record<string, any>,
  Props = Record<string, any>,
  Instance = never,
  Options = never,
  Emit = (event: string, ...args: any[]) => Vue
> {
  readonly $data: Data
  readonly $props: Props
  readonly $parent: NeverFallback<Instance, Vue> | null
  readonly $root: NeverFallback<Instance, Vue>
  readonly $children: NeverFallback<Instance, Vue>[]
  readonly $options: NeverFallback<Options, ComponentOptions<Vue>>
  $emit: Emit
  readonly $el: Element
  readonly $refs: {
    [key: string]:
      | NeverFallback<Instance, Vue>
      | Vue
      | Element
      | (NeverFallback<Instance, Vue> | Vue | Element)[]
      | undefined
  }
  readonly $slots: { [key: string]: VNode[] | undefined }
  readonly $scopedSlots: { [key: string]: NormalizedScopedSlot | undefined }
  readonly $isServer: boolean
  readonly $ssrContext: any
  readonly $vnode: VNode
  readonly $attrs: Record<string, string>
  readonly $listeners: Record<string, Function | Function[]>
  $mount(elementOrSelector?: Element | string, hydrating?: boolean): this
  $forceUpdate(): void
  $destroy(): void
  $set: typeof Vue.set
  $delete: typeof Vue.delete
  $watch(
    expOrFn: string,
    callback: (this: this, n: any, o: any) => void,
    options?: WatchOptions
  ): () => void
  $watch<T>(
    expOrFn: (this: this) => T,
    callback: (this: this, n: T, o: T) => void,
    options?: WatchOptions
  ): () => void
  $on(event: string | string[], callback: Function): this
  $once(event: string | string[], callback: Function): this
  $off(event?: string | string[], callback?: Function): this
  $nextTick: typeof nextTick
  $createElement: CreateElement
}
declare const Vue: VueConstructor

export { CombinedVueInstance, CreateElement, ExtendedVue, Vue, VueConfiguration, VueConstructor, Vue as default };

// declare global{
//   let Vue: VueConstructor;
// }
