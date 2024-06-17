import React from "react";

function Post() {
  return (
    <div className="post">
      <div className="image">
        <img src="https://techcrunch.com/wp-content/uploads/2024/05/Server-Room.jpeg?resize=1200,857" />
      </div>
      <div className="content">
        <h2>Weka raises $140M as the AI boom bolsters data platforms</h2>
        <p>
          The challenges are many. But a commonly recurring one is data
          management. The data that companies need to train, run and fine-tune
          AI models is disorganized, siloed, and otherwise unoptimized. In a
          2022 survey by Great Expectations, an open source data benchmarking
          platform, 77% of organizations said they were concerned about their
          data quality.
        </p>
      </div>
    </div>
  );
}

export default Post;
