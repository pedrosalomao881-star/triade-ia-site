"use client";

interface ThumbnailProps {
  title: string;
  subtitle: string;
  accent?: "calendar" | "chart" | "ladder" | "default";
  category?: "reforma" | "ai-first" | "insight";
}

export default function ArticleThumbnail({
  title,
  subtitle,
  accent = "default",
  category = "reforma",
}: ThumbnailProps) {
  // Colors
  const brandGreen = "#2ECC71";
  const navy = "#0F1B3C";
  const accentLight = "rgba(46, 204, 113, 0.1)";

  const getAccentIcon = () => {
    switch (accent) {
      case "calendar":
        return (
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-20"
          >
            <rect
              x="10"
              y="20"
              width="100"
              height="100"
              rx="8"
              stroke={brandGreen}
              strokeWidth="2"
            />
            <line x1="30" y1="20" x2="30" y2="40" stroke={brandGreen} strokeWidth="2" />
            <line x1="90" y1="20" x2="90" y2="40" stroke={brandGreen} strokeWidth="2" />
            <line x1="10" y1="50" x2="110" y2="50" stroke={brandGreen} strokeWidth="2" />
            <circle cx="50" cy="80" r="15" fill={brandGreen} opacity="0.8" />
          </svg>
        );
      case "chart":
        return (
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-20"
          >
            <rect x="20" y="60" width="15" height="40" fill={brandGreen} opacity="0.6" />
            <rect x="50" y="40" width="15" height="60" fill={brandGreen} opacity="0.8" />
            <rect x="80" y="20" width="15" height="80" fill={brandGreen} />
            <polyline
              points="27.5,60 57.5,40 87.5,20"
              stroke={brandGreen}
              strokeWidth="2"
              fill="none"
            />
          </svg>
        );
      case "ladder":
        return (
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-20"
          >
            <line x1="25" y1="100" x2="25" y2="20" stroke={brandGreen} strokeWidth="2" />
            <line x1="95" y1="100" x2="95" y2="20" stroke={brandGreen} strokeWidth="2" />
            {[1, 2, 3, 4, 5, 6, 7].map((step) => (
              <line
                key={step}
                x1="25"
                y1={100 - step * 12}
                x2="95"
                y2={100 - step * 12}
                stroke={brandGreen}
                strokeWidth="2"
                opacity={step % 2 === 0 ? 1 : 0.5}
              />
            ))}
          </svg>
        );
      default:
        return (
          <div className="w-32 h-32 rounded-full border-4" style={{ borderColor: brandGreen }} />
        );
    }
  };

  return (
    <div
      style={{
        width: "1200px",
        height: "630px",
        background: `linear-gradient(135deg, ${navy} 0%, #1a2f5a 100%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "60px",
        position: "relative",
        overflow: "hidden",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          right: "-80px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: accentLight,
          zIndex: 0,
        }}
      />

      {/* Left content */}
      <div style={{ flex: 1, position: "relative", zIndex: 1 }}>
        <h1
          style={{
            fontSize: "56px",
            fontWeight: 700,
            color: "#E8F0FE",
            marginBottom: "24px",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: "24px",
            fontWeight: 400,
            color: "rgba(232, 240, 254, 0.7)",
            lineHeight: 1.4,
            maxWidth: "600px",
          }}
        >
          {subtitle}
        </p>
      </div>

      {/* Right accent */}
      <div
        style={{
          flex: 0.4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {getAccentIcon()}
      </div>

      {/* Footer brand line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "8px",
          background: brandGreen,
          zIndex: 2,
        }}
      />

      {/* Logo corner */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          right: "40px",
          fontSize: "14px",
          color: "rgba(232, 240, 254, 0.5)",
          fontWeight: 600,
          zIndex: 2,
        }}
      >
        TRÍADE IA
      </div>
    </div>
  );
}
