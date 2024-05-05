import { delay } from "@/app/utils";
import { NextRequest, NextResponse } from "next/server";
const users = [
  {
    id: "1",
    avatar:
      "https://robohash.org/24a6cda547939ea8a11aeec1d8e9e457?set=set4&bgset=&size=200x200",
  },
  {
    id: "2",
    avatar:
      "https://robohash.org/b8934a40b2298686320ca4055acf2bf6?set=set4&bgset=&size=200x200",
  },
  {
    id: "3",
    avatar:
      "https://robohash.org/caa7b569fd1e311aa906108736ea366e?set=set4&bgset=&size=200x200",
  },
  {
    id: "4",
    avatar:
      "https://robohash.org/d178f05c0002c0e668d06252a252efcb?set=set4&bgset=&size=200x200",
  },
];
export const GET = async (request: NextRequest) => {
  const userId = request.nextUrl.searchParams.get("id");
  await delay(3000);
  const user = users.find((user) => user.id == userId);
  return NextResponse.json({
    url: user?.avatar,
  });
};
