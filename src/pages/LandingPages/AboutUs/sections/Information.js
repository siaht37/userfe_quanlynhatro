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

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import { Fragment, useEffect, useState } from "react";
import { HoaDonHangThang } from "../../../../apis";
import Button from "@mui/material/Button";

function Information() {
  const [hoaDonHangThangs, setHoaDonHangThangs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await HoaDonHangThang.getHoaDonHangThangByUsername("user1");
      setHoaDonHangThangs(data);
    };
    fetchData();
  }, []);

  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} style={{ fontSize: 20 }} lg={6}>
            <MKBox mb={5}>
              {hoaDonHangThangs.length ? (
                <DefaultInfoCard
                  title={`Bạn có ${
                    hoaDonHangThangs.filter((hoaDon) => !hoaDon.trangThaiThanhToan).length
                  } hóa đơn chưa thanh toán`}
                />
              ) : (
                <></>
              )}
            </MKBox>
            <Grid container justifyContent="flex-start" alignItems={"center"}>
              {hoaDonHangThangs.map((hoaDon) => (
                <Fragment key={hoaDon.maHoaDonHangThang}>
                  <Grid
                    sx={{
                      boxShadow: 3,
                      width: "8rem",
                      height: "5rem",
                      bgcolor: (theme) => (theme.palette.mode === "dark" ? "#101010" : "#fff"),
                      color: (theme) => (theme.palette.mode === "dark" ? "grey.300" : "grey.800"),
                      p: 1,
                      m: 1,
                      borderRadius: 2,
                      textAlign: "center",
                      fontSize: "1rem",
                      fontWeight: "700",
                    }}
                    xs={8}
                    md={8}
                  >
                    <MKBox mb={5} fontSize={20}>
                      <DefaultInfoCard
                        description={"Số tiền: " + hoaDon.soTien}
                        title={`Hóa đơn tháng ${new Date(hoaDon.ngayLap).getMonth() + 1}`}
                      />
                    </MKBox>
                  </Grid>
                  {!hoaDon.trangThaiThanhToan ? (
                    <Button
                      style={{ padding: 24, fontSize: 17, color: "white" }}
                      variant="contained"
                    >
                      Thanh toán
                    </Button>
                  ) : (
                    <Button
                      disabled
                      style={{ padding: 24, color: "black", fontSize: 17 }}
                      variant="contained"
                    >
                      Đã thanh toán
                    </Button>
                  )}
                </Fragment>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              title="Get insights on Search"
              description="Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards."
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                label: "find out more",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
