# `<ngl-avatar>`

### Input
  * `src`: Image url.
  * `size?: 'x-small' | 'small' | 'medium' | 'large' = 'medium'`: Image size.
  * `variant?: 'rectangle' | 'circle' = 'rectangle'`: Image shape.
  * `alternativeText?`: Assistive text.
  * `initials?`: If an image is unavailable, this text will be shown instead.
  * `fallbackIconName?`: The initials fallback relies on this for its background color. Names are written in the format 'standard:account' where 'standard' is the category, and 'account' is the specific icon to be displayed.

### Output

  * `onError: EventEmitter`: When image fails to load. In this case initials will be displayed, if set.

# `<figure[nglFigure]>`

### Input
  * `nglTitle?`: Image caption

### Content

  * `nglCrop?`: '16-by-9' | '4-by-3' | '1-by-1'`: Apply cropping to the specified element
