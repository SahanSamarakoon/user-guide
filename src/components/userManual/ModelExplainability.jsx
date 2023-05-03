import React from "react";
import Grid from "@mui/material/Grid";

export default function SelectFile() {
  return (
    <div style={{ background: "#f5f5f5" }}>
      <div className="section section-brown">
        <div>
          <Grid container spacing={1}>
            <Grid item xs={3} md={1}>
              <img style={{ width: "80%" }} src="/userManual/STEP 04.png" />
            </Grid>
            <Grid xs={9} md={10} container alignItems="center">
              <div className="section-h2">
                <b>Browse through the Attention Map</b>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="section-p">
                You can browse through the attention maps images to learn which
                section of the X-ray is used to generate each word in the
                report.
              </div>
              <div className="section-p">
                The attention maps are included in the downloadable PDF report.
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <img style={{ width: "100%" }} src="/userManual/Step 04.gif" />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
