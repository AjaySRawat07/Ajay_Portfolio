import { ImageResponse } from "next/og";
import { profile } from "../data/profile";

export const alt = "Ajay Singh Rawat - Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0d0e10",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "560px",
            height: "560px",
            borderRadius: "50%",
            background: "#f2b45c",
            opacity: 0.15,
            filter: "blur(120px)",
            top: "-100px",
            right: "-100px",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 100,
            color: "#ecebe6",
            letterSpacing: "-0.01em",
            fontFamily: "serif",
            fontWeight: 400,
            marginBottom: "20px",
          }}
        >
          Ajay
          <span style={{ color: "#f2b45c" }}>.</span>
          Rawat
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 40,
            color: "#9a9ea6",
            fontFamily: "sans-serif",
            fontWeight: 500,
          }}
        >
          {profile.eyebrow}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
