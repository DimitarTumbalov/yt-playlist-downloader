import { NextResponse } from "next/server";
const fs = require('fs');
const { create: createYoutubeDl } = require('youtube-dl-exec')
const youtubedl = createYoutubeDl(`${process.cwd()}/node_modules/youtube-dl-exec/bin/yt-dlp.exe`);

type GetParams = {
  params: {
    videoId: string
  }
}

export const GET = async(r: Request, { params } : GetParams) => {
  const response = await youtubedl(`https://www.youtube.com/watch?v=${params.videoId}`, {
    dumpJson: true,
  }).then((output: any) => {

    const audioFormats = output.formats.filter((format: any) => format.resolution == 'audio only' && format.asr != null).map((format: any) => ({
      url: format.url,
      ext: format.audio_ext,
      bitrate: format.asr,
      quality: format.quality,
      format: format.format,
      format_id: format.format_id,
      filesize: format.filesize
    }));

    return audioFormats;
  }).catch((err: Error) => console.log(err))
  
  return NextResponse.json(response);
}