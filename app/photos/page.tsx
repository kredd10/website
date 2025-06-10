import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Photos</h1>
      <ImageGrid
        columns={3}
        images={[
          {
            src: "/photos/photo1.jpg",
            alt: "Merchandise Mart",
            href: "https://unsplash.com/photos/89Jq4K84UhM",
          },
          {
            src: "/photos/photo2.jpg",
            alt: "Water Taxi",
            href: "https://unsplash.com/photos/lZtVnJOMbo4",
          },
          {
            src: "/photos/photo3.jpg",
            alt: "Chicago River",
            href: "https://unsplash.com/photos/rCacFxx2XPY",
          },
          {
            src: "/photos/photo9.jpg",
            alt: "River tour",
            href: "https://unsplash.com/photos/YigehSHcJjU",
          },
          {
            src: "/photos/photo10.jpg",
            alt: "Chicago river",
            href: "https://unsplash.com/photos/lrWlYfJ6oNg",
          },
          {
            src: "/photos/photo6.jpg",
            alt: "Clark Street Chicago River",
            href: "https://unsplash.com/photos/x35C5dTLUPk",
          },
          {
            src: "/photos/photo7.jpg",
            alt: "Chicago Architecture",
            href: "https://unsplash.com/photos/mJNRUY9oZ8w",
          },
          {
            src: "/photos/photo8.jpg",
            alt: "Water taxi crossing",
            href: "https://unsplash.com/photos/S4qgTpD0vXk",
          },
          {
            src: "/photos/photo11.jpg",
            alt: "Wrigley and Tribune from Chicago river",
            href: "https://unsplash.com/photos/59FzB4ldFVk",
          },
          {
            src: "/photos/photo12.jpg",
            alt: "Tribune and Wrigley from Millennium Park",
            href: "https://unsplash.com/photos/59FzB4ldFVk",
          },
        ]}
      />

      <h2 className="mt-16 mb-8 text-xl font-medium tracking-tight">Chicago Architecture (2-column layout)</h2>
      <ImageGrid
        columns={2}
        images={[
          {
            src: "/photos/photo1.jpg",
            alt: "Merchandise Mart",
            href: "https://unsplash.com/photos/89Jq4K84UhM",
          },
          {
            src: "/photos/photo2.jpg",
            alt: "Water Taxi",
            href: "https://unsplash.com/photos/lZtVnJOMbo4",
          },
          {
            src: "/photos/photo3.jpg",
            alt: "Chicago River",
            href: "https://unsplash.com/photos/rCacFxx2XPY",
          },
          {
            src: "/photos/photo9.jpg",
            alt: "River tour",
            href: "https://unsplash.com/photos/YigehSHcJjU",
          },
        ]}
      />

      <h2 className="mt-16 mb-8 text-xl font-medium tracking-tight">Chicago Skyline (4-column layout)</h2>
      <ImageGrid
        columns={4}
        images={[
          {
            src: "/photos/photo10.jpg",
            alt: "Chicago river",
            href: "https://unsplash.com/photos/lrWlYfJ6oNg",
          },
          {
            src: "/photos/photo6.jpg",
            alt: "Clark Street Chicago River",
            href: "https://unsplash.com/photos/x35C5dTLUPk",
          },
          {
            src: "/photos/photo7.jpg",
            alt: "Chicago Architecture",
            href: "https://unsplash.com/photos/mJNRUY9oZ8w",
          },
          {
            src: "/photos/photo8.jpg",
            alt: "Water taxi crossing",
            href: "https://unsplash.com/photos/S4qgTpD0vXk",
          },
          {
            src: "/photos/photo11.jpg",
            alt: "Wrigley and Tribune from Chicago river",
            href: "https://unsplash.com/photos/59FzB4ldFVk",
          },
          {
            src: "/photos/photo12.jpg",
            alt: "Tribune and Wrigley from Millennium Park",
            href: "https://unsplash.com/photos/59FzB4ldFVk",
          },
        ]}
      />
    </section>
  );
}
