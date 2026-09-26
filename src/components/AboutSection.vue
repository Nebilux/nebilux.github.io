<template>
  <section id="about" class="section about-section">
    <div class="shell">
      <div class="section-heading" data-reveal>
        <p class="kicker"><span>01</span> Our Perspective</p>
        <h2>Light Emerging<br />from <em>Complexity</em></h2>
      </div>

      <div class="about-grid">
        <div class="about-copy" data-reveal>
          <p class="about-copy__lead">
            The unknown is not an empty space. It is a field of signals waiting for structure, direction, and meaning.
          </p>
          <p>
            Nebilux brings together technology, creative practice, and open collaboration to explore questions that do
            not yet have obvious answers. We build reliable tools, connect thoughtful people, and share what endures.
          </p>
          <p>
            We are not defined by a single industry or product. Our work begins wherever complexity asks for a clearer
            way forward.
          </p>
        </div>

        <div class="signal-map" data-reveal aria-label="Unknown becomes structure, direction, then possibility">
          <svg viewBox="0 0 620 260" role="img" aria-hidden="true">
            <defs>
              <linearGradient id="signal-line" x1="0" y1="0" x2="1" y2="0">
                <stop stop-color="#5f54aa" stop-opacity=".18" />
                <stop offset=".5" stop-color="#6c8dff" />
                <stop offset="1" stop-color="#e3f4ff" />
              </linearGradient>
              <filter id="signal-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" />
              </filter>
            </defs>
            <path class="signal-map__ghost" d="M38 168C108 50 174 228 250 116s138 95 326-31" />
            <path class="signal-map__line" d="M38 168C108 50 174 228 250 116s138 95 326-31" />
            <circle cx="38" cy="168" r="4" />
            <circle cx="250" cy="116" r="5" />
            <circle class="signal-map__glow" cx="576" cy="85" r="14" />
            <circle cx="576" cy="85" r="5" />
          </svg>
          <div class="signal-map__labels">
            <span>Unknown</span>
            <span>Structure</span>
            <span>Direction</span>
            <span>Possibility</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
