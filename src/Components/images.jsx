import React, { useState } from "react";
import Masonry from "react-masonry-css";
function images() {
  const imageUrls = [];
  return (
    <div>
      <Masonry imageUrls={imageUrls} columnCount="4" gap="5"></Masonry>
    </div>
  );
}
export default images;
