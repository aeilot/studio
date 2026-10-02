import Image from "next/image";

/** Static screenshot in the same silver frame used on the Rediscover page. */
export function Device({ src, alt, sizes }: { src: string; alt: string; sizes: string }) {
  return (
    <div className="ip-device">
      <span className="ip-device-button ip-device-button-left" aria-hidden="true" />
      <span className="ip-device-button ip-device-button-right" aria-hidden="true" />
      <div className="ip-device-screen">
        <Image src={src} alt={alt} width={840} height={1824} sizes={sizes} />
      </div>
    </div>
  );
}
