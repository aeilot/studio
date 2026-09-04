import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Rediscover — The pages you meant to read";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const loraSemiBold = readFile(
  join(process.cwd(), "app/rediscover/og/Lora-SemiBold.woff"),
);
const sourceSansRegular = readFile(
  join(process.cwd(), "app/rediscover/og/SourceSans3-Regular.ttf"),
);
const sourceSansSemiBold = readFile(
  join(process.cwd(), "app/rediscover/og/SourceSans3-SemiBold.ttf"),
);
const todayPng = readFile(
  join(process.cwd(), "public/rediscover/today.png"),
).then((buf) => `data:image/png;base64,${buf.toString("base64")}`);
const iconPng = readFile(
  join(process.cwd(), "public/rediscover/icon.png"),
).then((buf) => `data:image/png;base64,${buf.toString("base64")}`);

export default async function Image() {
  const [lora, sans400, sans600, today, icon] = await Promise.all([
    loraSemiBold,
    sourceSansRegular,
    sourceSansSemiBold,
    todayPng,
    iconPng,
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#F7F6F0",
          color: "#252B21",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 720,
            height: 720,
            borderRadius: 360,
            background: "#E8EDDF",
            right: -80,
            top: -45,
          }}
        />
        <div
          style={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            top: 72,
            left: 80,
          }}
        >
          <img
            src={icon}
            width={36}
            height={36}
            style={{ borderRadius: 8, marginRight: 12 }}
          />
          <div
            style={{
              display: "flex",
              fontFamily: "Source Sans 3",
              fontSize: 28,
              fontWeight: 600,
              letterSpacing: -0.6,
            }}
          >
            Rediscover
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            top: 198,
            left: 80,
            fontFamily: "Lora",
            fontSize: 58,
            fontWeight: 600,
            letterSpacing: -1.4,
          }}
        >
          The pages you
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            top: 268,
            left: 80,
            fontFamily: "Lora",
            fontSize: 58,
            fontWeight: 600,
            letterSpacing: -1.4,
          }}
        >
          meant to read.
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            top: 360,
            left: 80,
            width: 520,
            fontFamily: "Source Sans 3",
            fontSize: 22,
            fontWeight: 400,
            color: "#6e6e73",
          }}
        >
          Save what interests you. Come back to a few pages each day.
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            left: 80,
            bottom: 64,
            fontFamily: "Source Sans 3",
            fontSize: 18,
            fontWeight: 400,
            color: "#8e8e93",
            letterSpacing: 0.2,
          }}
        >
          iPhone · iPad · Mac
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            right: 88,
            top: 76,
          }}
        >
          <div
            style={{
              display: "flex",
              borderRadius: 40,
              padding: 7,
              background: "#1d1d1f",
              boxShadow: "0 28px 48px rgba(24, 35, 51, 0.28)",
              transform: "rotate(-4deg)",
            }}
          >
            <img
              src={today}
              width={220}
              height={478}
              style={{ borderRadius: 33 }}
            />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Lora", data: lora, weight: 600, style: "normal" },
        { name: "Source Sans 3", data: sans400, weight: 400, style: "normal" },
        { name: "Source Sans 3", data: sans600, weight: 600, style: "normal" },
      ],
    },
  );
}
