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

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Presentation page components
import ExampleCard from "pages/Presentation/components/ExampleCard";

// Data
import { LoaiPhong } from "../../../apis";
import { useEffect, useState } from "react";

function DesignBlocks() {
  const [loaiPhongs, setLoaiPhongs] = useState([]);
  useEffect(() => {
    const fetchDate = async () => {
      const data = await LoaiPhong.getAllLoaiPhong();
      setLoaiPhongs(data);
    };

    fetchDate();
  }, []);

  const renderData = loaiPhongs.map(({ tenLoaiPhong, soLuong, hinh, dienTich, gia }) => (
    <Grid style={{justifyContent: "center"}} sx={{ mb: 10 }} key={tenLoaiPhong} sm={12} lg={4} container>
      <ExampleCard
        image={`${process.env.REACT_APP_QUAN_LY_NHA_TRO}/${hinh}`}
        name={tenLoaiPhong}
        count={soLuong}
        dienTich={dienTich}
        gia={gia}
        pro={true}
      />
    </Grid>
  ));

  return (
    <MKBox component="section" my={6} py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKTypography variant="h2" fontWeight="bold">
            Các loại phòng
          </MKTypography>
          <MKTypography variant="body1" color="text"></MKTypography>
        </Grid>
      </Container>
      <Container sx={{ mt: 6 }}>
        <Grid container sx={{ mb: 10 }}>
          {renderData}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default DesignBlocks;
