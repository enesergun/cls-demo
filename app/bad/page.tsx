"use client";
import { useEffect, useState } from "react";

export default function BadPage() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 1000);
  }, []);

  return (
    <div>
      <h1 style={{ fontSize: "32px" }}>BAD PAGE</h1>
      <p>This page will shift when the image is loaded.</p>

      {!show ? null : (
        <img
          src="/cat.avif?v=99"
          style={{
            width: "100%",
            display: "block",
          }}
          alt="demo"
        />
      )}

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

      {!show ? null : (
        <div style={{ padding: "1rem", background: "yellow" }}>Advertisement loaded.</div>
      )}
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
