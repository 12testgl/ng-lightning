### <ngl-carousel>
#### NglCarousel

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[active]` | Index of active image. | number | 0 |
| `[autoScroll]` | Whether auto scroll is enabled. | boolean | true |
| `[autoRefresh]` | Whether the carousel should continue looping from the beginning after the last item is displayed. | boolean | true |
| `[scrollDuration]` | The auto scroll duration in seconds. After that the next image is displayed. | number | 5 |
| `(activeChange)` | Emits the index of the image to be activated.  | EventEmitter<number> | |


### <ngl-carousel-image>
#### NglCarouselImage

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[src]` | The path to the image. | string | |
| `[header]` | Text for the label that's displayed under the image. | string | |
| `[description]` | Text displayed under the header. | string \| TemplateRef | |
| `[alternativeText]` | Assistive text for the image. | string | |
