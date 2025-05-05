"use client";
import { useEffect, useState } from "react";

export default function GoodPage() {
  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowAd(true), 3000);
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Good Page (CLS optimized)</h1>
      <p className="mb-4">
        The layout remains stable because the image and ad space are already taken up.
      </p>

      <img
        src="/cat.avif"
        alt="Demo"
        width={1200}
        height={800}
        style={{ width: "100%", aspectRatio: "3 / 2", display: "block" }}
        className="mb-4"
      />
      <div className="my-1.5 bg-amber-600">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        </p>
      </div>

      <div
        style={{
          minHeight: "100px",
          transition: "all 0.3s ease-in-out",
        }}
        className={`p-4 ${showAd ? "bg-yellow-300" : "bg-gray-100"}`}
      >
        {showAd ? "This is an advertising space." : "Ad loading..."}
      </div>
      <div className="my-1.5 bg-amber-600">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        </p>
      </div>
    </div>
  );
}
