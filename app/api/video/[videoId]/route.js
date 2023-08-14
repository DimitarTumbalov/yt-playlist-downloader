const { NextResponse } = require("next/server");
const fs = require('fs');
const { create: createYoutubeDl } = require('youtube-dl-exec')
const youtubedl = createYoutubeDl(`${process.cwd()}/node_modules/youtube-dl-exec/bin/yt-dlp.exe`);

export const GET = async(_, { params }) => {
  const response = await youtubedl(`https://www.youtube.com/watch?v=${params.videoId}`, {
    dumpJson: true,
  }).then(output => {

    const audioFormats = output.formats.filter(format => format.resolution == 'audio only' && format.asr != null).map(format => ({
      url: format.url,
      ext: format.audio_ext,
      bitrate: format.asr,
      quality: format.quality,
      format: format.format,
      format_id: format.format_id,
      filesize: format.filesize
    }));

    return audioFormats;
  }).catch(err => console.log(err))
  
  return NextResponse.json(response);
}