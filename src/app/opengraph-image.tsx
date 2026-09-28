import { ImageResponse } from "next/og";
import { site } from "../../content/site";

export const alt = site.seo.ogImageAlt;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0b0f16",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#e8ebf1",
        }}
      >
        <div style={{ fontSize: 96, fontFamily: "serif", marginBottom: 20 }}>
          {site.person.name}
        </div>
        <div style={{ fontSize: 48, color: "#8a94a6" }}>
          {site.person.role}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
