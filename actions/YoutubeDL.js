'use server'

import youtubeDl from "youtube-dl-exec";

export const download = (videoId) => {
  'use server';
  youtubeDl(`https://www.youtube.com/watch?v=IGbff7xslLs`).then(output => console.log(output)).catch(err => console.log(err))
}