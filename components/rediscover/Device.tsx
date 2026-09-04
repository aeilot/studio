import Image from "next/image";

export function Device({
  src,
  alt,
  priority = false,
  kind = "iphone",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  kind?: "iphone" | "ipad";
}) {
  return (
    <div className={`rd-device ${kind === "ipad" ? "rd-device-ipad" : ""}`}>
      <span
        className="rd-device-button rd-device-button-left"
        aria-hidden="true"
      />
      <span
        className="rd-device-button rd-device-button-right"
        aria-hidden="true"
      />
      <div className="rd-device-screen">
        <Image
          src={src}
          alt={alt}
          width={kind === "ipad" ? 1668 : 1206}
          height={kind === "ipad" ? 2420 : 2622}
          sizes={
            kind === "ipad"
              ? "(max-width: 700px) 72vw, 490px"
              : "(max-width: 700px) 260px, 310px"
          }
          priority={priority}
        />
      </div>
    </div>
  );
}
