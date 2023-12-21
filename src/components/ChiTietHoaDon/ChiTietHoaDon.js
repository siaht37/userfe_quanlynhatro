import {
    Flex,
    Table,
    Tbody,
    Text,
    Th,
    Thead,
    Tr,
    Td,
    useColorModeValue,
  } from "@chakra-ui/react";
  import Card from "components/Card/Card.js";
  import CardBody from "components/Card/CardBody.js";
  import { useEffect, useState } from "react";
  import { getHoaDonByMaHoaDon } from "../../apis";
  
  export default function ChiTietHoaDon(props) {
    const borderColor = useColorModeValue("gray.200", "gray.600");
    const textColor = useColorModeValue("gray.700", "white");
  
    const { maHoaDon } = props;
    const [chiTietHoaDon, setChiTietHoaDon] = useState();
  
    useEffect(() => {
      const fetchData = async () => {
        const data = await getHoaDonByMaHoaDon(maHoaDon);
        setChiTietHoaDon(data);
      };
      fetchData();
    }, []);
  
    return (
      <Flex direction="column" pt={{ base: "120px", md: "75px" }} width={"100%"}>
        <Card overflowX={{ sm: "scroll", xl: "hidden" }} pb="0px">
          <CardBody>
            <Table
              style={{
                maxHeight: "60vh",
                overflow: "auto",
                width: "100%",
                tableLayout: "fixed",
                borderCollapse: "collapse",
              }}
              variant="simple"
              color={textColor}
            >
              <Thead position={"sticky"} top={0} background={"white"}>
                <Tr my=".8rem" pl="0px" color="gray.400">
                  <Th
                    pl="0px"
                    borderColor={borderColor}
                    color="gray.400"
                    textAlign={"center"}
                  >
                    Chi tiết
                  </Th>
                  <Th
                    borderColor={borderColor}
                    color="gray.400"
                    textAlign={"center"}
                  >
                    Số lượng
                  </Th>
                  <Th
                    textAlign={"center"}
                    borderColor={borderColor}
                    color="gray.400"
                  >
                    Giá
                  </Th>
                  <Th
                    textAlign={"center"}
                    borderColor={borderColor}
                    color="gray.400"
                  >
                    Thành tiền
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td textAlign={"center"} pl="0px" borderColor={borderColor}>
                    <Text fontSize="md" fontWeight="bold" minWidth="100%">
                      Tiền phòng
                    </Text>
                  </Td>
                  <Td textAlign={"center"} pl="0px" borderColor={borderColor}>
                    <Text fontSize="md" fontWeight="bold" minWidth="100%">
                      1
                    </Text>
                  </Td>
                  <Td>
                    <Text></Text>
                  </Td>
                  <Td textAlign={"center"}>
                    <Text fontSize="md" fontWeight="bold" minWidth="100%">
                      {
                        chiTietHoaDon?.hoaDonHangThang?.hopDongThuePhong?.phong
                          ?.loaiPhong?.gia
                      }
                    </Text>
                    {/* 
                    ... nhiều quá :))
                    */}
                  </Td>
                </Tr>
                <Tr>
                  <Td textAlign={"center"}>
                    <Text fontSize="md" fontWeight="bold" minWidth="100%">
                      Điện
                    </Text>
                  </Td>
                  <Td textAlign={"center"}>{chiTietHoaDon?.soDien?.so}</Td>
                  <Td textAlign={"center"}>{chiTietHoaDon?.soDien?.donGia}</Td>
                  <Td textAlign={"center"}>
                    {chiTietHoaDon?.soDien?.so * chiTietHoaDon?.soDien?.donGia}
                  </Td>
                </Tr>
                <Tr>
                  <Td textAlign={"center"}>Nước</Td>
                  <Td textAlign={"center"}>{chiTietHoaDon?.soNuoc?.so}</Td>
                  <Td textAlign={"center"}>{chiTietHoaDon?.soNuoc?.donGia}</Td>
                  <Td textAlign={"center"}>
                    {chiTietHoaDon?.soNuoc?.so * chiTietHoaDon?.soNuoc?.donGia}
                  </Td>
                </Tr>
                {chiTietHoaDon?.chiTietPhieuThueTienIches?.map(
                  (chiTiet, index) => {
                    return (
                      <Tr key={index}>
                        <Td textAlign={"center"} colSpan={1}>
                          {chiTiet?.tienIch?.tenTienIch}
                        </Td>
                        <Td></Td>
                        <Td textAlign={"center"}>{chiTiet?.tienIch?.gia}</Td>
                        <Td textAlign={"center"}>{chiTiet?.tienIch?.gia}</Td>
                      </Tr>
                    );
                  }
                )}
                <Tr>
                  <Td colSpan={2} textAlign={"right"}>
                    Tổng
                  </Td>
                  <Td colSpan={2} textAlign={"center"}>
                    {chiTietHoaDon?.hoaDonHangThang?.soTien}
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </CardBody>
        </Card>
      </Flex>
    );
  }
  