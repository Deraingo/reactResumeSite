import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Sidebar from "../sidebar";
import "./style/the-finals-style.css";

function TheFinals() {
  const [showTechnical, setTechnical] = useState(false);
  return (
    <div className="the-finals-container">
      <Sidebar />
      <h2>Data Analysis on "The Finals"</h2>
      <p>
        Repo: <a href="https://github.com/Deraingo/IntroDataAnalysis">
          https://github.com/Deraingo/IntroDataAnalysis
        </a>
      </p>
      <p>Built for: Intro to Data Analysis - final project</p>
      <div style={{ display: "flex", gap: "1rem", margin: "1rem 0" }}>
        <button
          onClick={() => setTechnical(false)}
          style={{ fontWeight: !showTechnical ? "bold" : "normal" }}
        >
          Overview
        </button>
        <button
          onClick={() => setTechnical(true)}
          style={{ fontWeight: showTechnical ? "bold" : "normal" }}
        >
          Technical Explanation
        </button>
      </div>
      {!showTechnical ? (
        <div className="project-explanation">
          <div>
            <p>
              A data pipeline that asks one question: does Embark Studios
              actually re-balance weapons in The Finals based on what the loudest
              content creators are saying? I pull weapon stats from the
              community's master spreadsheet, scrape the official patch notes,
              and collect community reaction from Reddit, YouTube transcripts,
              and Twitter around each update. Sentiment analysis on that text
              gets paired with what actually changed in each patch, and a
              correlation analysis tries to spot whether the weapons getting
              loud creator backlash are the same ones getting touched. The
              project taught me how messy real-world data collection gets when
              your sources are an API, a forum, a video transcript service, and
              a community-maintained Google Sheet, all telling slightly
              different stories about the same patch.
            </p>
          </div>
        </div>
      ) : (
        <div className="project-explanation">
          <div>
            <p>
              <strong>The question: </strong>
              Live-service shooters re-balance weapons every patch, and Embark
              ships those changes to The Finals on a roughly weekly cadence.
              Players notice when a weapon they hate gets touched right after
              a popular streamer complains about it. I wanted to see if that
              pattern held up at all under real measurement, not vibes, does
              community sentiment shift before a patch correlate with whether
              that weapon actually gets changed in it?
            </p>
            <p>
              <strong>My role:</strong> Sole developer. Built every layer of
              the pipeline, from retrieval through analysis and write-up.
            </p>
            <p>
              <strong>Architecture:</strong> The system splits into three stages
              that run independently so you can re-run any one of them when a
              new patch drops:
            </p>
            <p>
              <i>Retrieval:</i> A YouTube Data API client pulls videos that
              match per-weapon queries, then youtube-transcript-api grabs the
              captions. Reddit pulls go through PRAW against r/thefinals,
              filtered to a date window around each update. Tweets come from
              tweepy with weapon + buff/nerf keyword combos sampled week by
              week. Patch notes themselves get scraped from
              reachthefinals.com, the scraper checks robots.txt before every
              request because I didn't want to be the reason they locked the
              page down.
            </p>
            <p>
              <i>Cleaning:</i> Zafferman's community Weapon Master Sheet gets
              split per patch version into Light / Medium / Heavy class CSVs.
              Patch note text runs through a regex pass that cross-references
              every weapon name against buff / nerf / increase / reduce
              language and produces a structured CSV of who changed when.
              YouTube transcripts get chunked and sent through GPT-4 to pull
              opinion text out of the raw caption stream, which was the only
              way to make a 30-minute meta-review video usable as data.
            </p>
            <p>
              <i>Analysis:</i> NLTK's VADER does the heavy lifting for sentiment
              scoring. Each weapon gets a pre-update and post-update sentiment
              average from Reddit, and the shift between them gets correlated
              against whether the weapon was actually changed in that patch
              using both Pearson and Spearman. Weapon stat trends across patches
              come out as matplotlib line plots Body Damage, Head Damage,
              Rate of Fire, Magazine Size, Damage-per-Magazine,so you can
              eyeball the actual numerical change next to the sentiment story.
              Word clouds and histograms exist mostly to sanity-check that the
              keyword filter is catching the right posts.
            </p>
            <p>
              <strong>Why this stack:</strong> Python was the only realistic
              choice, PRAW, tweepy, NLTK, pandas, scipy, and matplotlib all
              live in the same ecosystem and the project would have been three
              times the code in anything else. GPT-4 for opinion extraction
              was the part I was least sure about, but YouTube captions are
              messy enough that keyword-and-regex approaches kept missing
              context, and the LLM caught nuance that a rule-based filter
              wouldn't.
            </p>
            <p>
              <strong>What I'd do differently:</strong> Every script has the
              weapon name and the pre/post date window hard-coded at the top.
              That worked for the report but means re-running it for a new
              patch is a copy-paste exercise. The next pass moves all of that
              behind CLI args so the same pipeline runs end-to-end against any
              patch with one command. I'd also cache the raw Reddit and
              YouTube pulls, right now every re-run hits the APIs again, and
              that burned through quota faster than I'd like to admit.
            </p>
            <p>
              <strong>What I learned:</strong> Most of the project wasn't the
              analysis, it was getting four messy data sources to agree on
              what "the patch on October 10th" meant. Sentiment scores look
              clean once they're in a CSV, but every row behind them is a
              decision about which subreddit window to query, which video
              counts as relevant, and whether a tweet calling a gun "actually
              insane" is positive or negative. The correlation numbers at the
              end mean very little without the cleaning story behind them.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default TheFinals;