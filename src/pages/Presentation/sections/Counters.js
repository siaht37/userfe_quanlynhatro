/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

//@mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

import { useEffect, useState } from "react";
import MKTypography from "components/MKTypography";

function Counters() {
  const [countPhongByConTrongIsTrue, setCountPhongByConTrongIsTrue] = useState(0);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_QUAN_LY_NHA_TRO}/Phong/SL`).then(async (res) => {
      const data = await res.json();
      setCountPhongByConTrongIsTrue(data);
    });
  }, []);

  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}></Grid>
          <Grid item xs={12} md={4} display="flex" justifyContent={"center"}>
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <DefaultCounterCard
              count={countPhongByConTrongIsTrue}
              title="Phòng còn trống"
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            {/* <DefaultCounterCard
              count={4}
              title="Pages"
              description="Save 3-4 weeks of work when you use our pre-made pages for your website"
            /> */}
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
