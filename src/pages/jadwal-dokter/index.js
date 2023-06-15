import Layout from "@/components/layout";
import Head from "next/head";
import React from "react";
import { Table } from "@nextui-org/react";

export default function JadwalDokter() {
  return (
    <Layout>
      <Head>
        <title>Jadwal Dokter - Puskesmas Kambang</title>
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <div className="min-h-screen px-20 pb-10 animate__animated animate__fadeInUpBig">
        <Table
          aria-label="Example table with static content"
          css={{
            height: "auto",
            minWidth: "100%",
          }}
        >
          <Table.Header>
            <Table.Column>Nama</Table.Column>
            <Table.Column>Poli</Table.Column>
            <Table.Column>Jadwal</Table.Column>
            <Table.Column>STATUS</Table.Column>
          </Table.Header>
          <Table.Body>
            <Table.Row
              css={{
                border: "$space$1 solid transparent",
                borderRadius: "$lg",
                "&:hover": { background: "#014E00", color: "$white" },
              }}
              key="1"
            >
              <Table.Cell>Roza Andriyani, Amd. PK.</Table.Cell>
              <Table.Cell>Rekam Medis</Table.Cell>
              <Table.Cell>{`Sabtu, 31 Mei 2023 (08.00 - 15.00)`}</Table.Cell>
              <Table.Cell>Ada</Table.Cell>
            </Table.Row>
            <Table.Row
              css={{
                border: "$space$1 solid transparent",
                borderRadius: "$lg",
                "&:hover": { background: "#014E00", color: "$white" },
              }}
              key="2"
            >
              <Table.Cell>Karlina Emi, S.ST</Table.Cell>
              <Table.Cell>Pelayanan Kesehatan Ibu</Table.Cell>
              <Table.Cell>{`Sabtu, 31 Mei 2023 (08.00 - 15.00)`}</Table.Cell>
              <Table.Cell>Ada</Table.Cell>
            </Table.Row>
            <Table.Row
              css={{
                border: "$space$1 solid transparent",
                borderRadius: "$lg",
                "&:hover": { background: "#014E00", color: "$white" },
              }}
              key="3"
            >
              <Table.Cell>Mira Farizawati, Amd. Kep.</Table.Cell>
              <Table.Cell>Pelayanan Umum</Table.Cell>
              <Table.Cell>{`Sabtu, 31 Mei 2023 (08.00 - 15.00)`}</Table.Cell>
              <Table.Cell>Ada</Table.Cell>
            </Table.Row>
            <Table.Row
              css={{
                border: "$space$1 solid transparent",
                borderRadius: "$lg",
                "&:hover": { background: "#014E00", color: "$white" },
              }}
              key="4"
            >
              <Table.Cell>Eni Amarni, Amd. Ak.</Table.Cell>
              <Table.Cell>Laboratorium</Table.Cell>
              <Table.Cell>{`Sabtu, 31 Mei 2023 (08.00 - 15.00)`}</Table.Cell>
              <Table.Cell>Ada</Table.Cell>
            </Table.Row>
            <Table.Row
              css={{
                border: "$space$1 solid transparent",
                borderRadius: "$lg",
                "&:hover": { background: "#014E00", color: "$white" },
              }}
              key="4"
            >
              <Table.Cell>Yurliza Nengsih, Amd. Keb.</Table.Cell>
              <Table.Cell>Pelayanan KB</Table.Cell>
              <Table.Cell>{`Sabtu, 31 Mei 2023 (08.00 - 15.00)`}</Table.Cell>
              <Table.Cell>Ada</Table.Cell>
            </Table.Row>
            <Table.Row
              css={{
                border: "$space$1 solid transparent",
                borderRadius: "$lg",
                "&:hover": { background: "#014E00", color: "$white" },
              }}
              key="4"
            >
              <Table.Cell>drg. Sandria Ilzatika</Table.Cell>
              <Table.Cell>Pelayanan Gigi & Mulut</Table.Cell>
              <Table.Cell>{`Sabtu, 31 Mei 2023 (08.00 - 15.00)`}</Table.Cell>
              <Table.Cell>Ada</Table.Cell>
            </Table.Row>
            <Table.Row
              css={{
                border: "$space$1 solid transparent",
                borderRadius: "$lg",
                "&:hover": { background: "#014E00", color: "$white" },
              }}
              key="4"
            >
              <Table.Cell>Devi Osdar, Amd. Keb.</Table.Cell>
              <Table.Cell>Pelayanan Kesehatan Anak</Table.Cell>
              <Table.Cell>{`Sabtu, 31 Mei 2023 (08.00 - 15.00)`}</Table.Cell>
              <Table.Cell>Ada</Table.Cell>
            </Table.Row>
            <Table.Row
              css={{
                border: "$space$1 solid transparent",
                borderRadius: "$lg",
                "&:hover": { background: "#014E00", color: "$white" },
              }}
              key="4"
            >
              <Table.Cell>Aprisal, Amd. Kep.</Table.Cell>
              <Table.Cell>Pelayanan Usila</Table.Cell>
              <Table.Cell>{`Sabtu, 31 Mei 2023 (08.00 - 15.00)`}</Table.Cell>
              <Table.Cell>Ada</Table.Cell>
            </Table.Row>
            <Table.Row
              css={{
                border: "$space$1 solid transparent",
                borderRadius: "$lg",
                "&:hover": { background: "#014E00", color: "$white" },
              }}
              key="4"
            >
              <Table.Cell>Neneng Mustika A., S.Farm.</Table.Cell>
              <Table.Cell>Kefarmasian</Table.Cell>
              <Table.Cell>{`Sabtu, 31 Mei 2023 (08.00 - 15.00)`}</Table.Cell>
              <Table.Cell>Ada</Table.Cell>
            </Table.Row>
            <Table.Row
              css={{
                border: "$space$1 solid transparent",
                borderRadius: "$lg",
                "&:hover": { background: "#014E00", color: "$white" },
              }}
              key="4"
            >
              <Table.Cell>Mira Farizawati, Amd. Kep.</Table.Cell>
              <Table.Cell>Pelayanan Imunisasi</Table.Cell>
              <Table.Cell>{`Sabtu, 31 Mei 2023 (08.00 - 15.00)`}</Table.Cell>
              <Table.Cell>Ada</Table.Cell>
            </Table.Row>
            <Table.Row
              css={{
                border: "$space$1 solid transparent",
                borderRadius: "$lg",
                "&:hover": { background: "#014E00", color: "$white" },
              }}
              key="4"
            >
              <Table.Cell>Rahyoni Ardianti, AMG</Table.Cell>
              <Table.Cell>Pelayanan Gizi</Table.Cell>
              <Table.Cell>{`Sabtu, 31 Mei 2023 (08.00 - 15.00)`}</Table.Cell>
              <Table.Cell>Ada</Table.Cell>
            </Table.Row>
            <Table.Row
              css={{
                border: "$space$1 solid transparent",
                borderRadius: "$lg",
                "&:hover": { background: "#014E00", color: "$white" },
              }}
              key="4"
            >
              <Table.Cell>Deri Zarwita, SKM.M.Kes.</Table.Cell>
              <Table.Cell>Klik Sanitasi</Table.Cell>
              <Table.Cell>{`Sabtu, 31 Mei 2023 (08.00 - 15.00)`}</Table.Cell>
              <Table.Cell>Ada</Table.Cell>
            </Table.Row>
            <Table.Row
              css={{
                border: "$space$1 solid transparent",
                borderRadius: "$lg",
                "&:hover": { background: "#014E00", color: "$white" },
              }}
              key="4"
            >
              <Table.Cell>Ns. Yusmarlinda, S.Kep.</Table.Cell>
              <Table.Cell>UGD</Table.Cell>
              <Table.Cell>{`Sabtu, 31 Mei 2023 (08.00 - 15.00)`}</Table.Cell>
              <Table.Cell>Ada</Table.Cell>
            </Table.Row>
            <Table.Row
              css={{
                border: "$space$1 solid transparent",
                borderRadius: "$lg",
                "&:hover": { background: "#014E00", color: "$white" },
              }}
              key="4"
            >
              <Table.Cell>Andri Dedi, SKM. MM.</Table.Cell>
              <Table.Cell>Rawat Inap</Table.Cell>
              <Table.Cell>{`Sabtu, 31 Mei 2023 (08.00 - 15.00)`}</Table.Cell>
              <Table.Cell>Ada</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </Layout>
  );
}
