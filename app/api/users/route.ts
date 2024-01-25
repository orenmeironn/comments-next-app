import { delay } from "@/app/utils";
import { NextResponse } from "next/server";

const users = [
  "https://robohash.org/24a6cda547939ea8a11aeec1d8e9e457?set=set4&bgset=&size=200x200",
  "https://robohash.org/b8934a40b2298686320ca4055acf2bf6?set=set4&bgset=&size=200x200",
  "https://robohash.org/caa7b569fd1e311aa906108736ea366e?set=set4&bgset=&size=200x200",
  "https://robohash.org/d178f05c0002c0e668d06252a252efcb?set=set4&bgset=&size=200x200",
];

export async function GET() {
  await delay(1000);
  return NextResponse.json({
    url: users[Math.floor(Math.random() * users.length)],
  });
}
