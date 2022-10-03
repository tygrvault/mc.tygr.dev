import { Flex, Heading, Stack, Image, Text, Link, Button } from '@chakra-ui/react';
import type { NextPage } from 'next'
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { BsCircleFill } from 'react-icons/bs';

const Home: NextPage = () => {
    const [pingData, setPingData] = useState(null);

    // fetch data from the /api/ping endpoint, store it in the ping state on page load and then inverval it every 5 seconds
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/ping');
            const data = await res.json();
            setPingData(data);
        }
        fetchData();
        const interval = setInterval(() => {
            fetchData();
        }, 5000);
        return () => clearInterval(interval);
    }, []);


    return (
        <>
            <Head>
                <title>tyger&apos;s valley</title>
            </Head>
            <Flex h={"100vh"} top={"50%"} mx={"4vw"} alignItems={"center"} justifyContent={"center"}>
                <Stack justifyContent={"center"} alignItems={"center"} spacing={8}>
                    <Image src="logo.png" alt={"logo"} w="128px" h="128px" />
                    <Stack justifyContent={"center"} alignItems={"center"} spacing={8}>
                        <Stack alignItems={"center"}>
                            <Text>
                                {pingData && (
                                    <>
                                        <Stack isInline spacing={2} align={"center"}>
                                            <BsCircleFill color={pingData === null ? "#C03822" : "#22CC52"} size={"12px"} />
                                            <Text color="#8F9094">{pingData.players.online} \ {pingData.players.max} online right now.</Text>
                                        </Stack>
                                    </>
                                )}
                            </Text>
                            <Heading>
                                mc.tygr.dev
                            </Heading>
                            <Text textAlign={"center"} color="#8F9094">
                                This server is invite-only.
                                <br />
                                To get access, you need to be invited by a member of the server.
                                <br /> <br />
                            </Text>
                        </Stack>
                        <Text textAlign={"center"} color="#FFFFFF">
                            <Link p={2} href="https://twitter.com/tygerxqt" isExternal>Twitter</Link>
                            {" "}•{" "}
                            <Link p={2} href="https://instagram.com/tygerxqt" isExternal>Instagram</Link>
                            {" "}•{" "}
                            <Link p={2} href="https://discord.gg/BJ8sWHntYb" isExternal>Discord</Link>
                        </Text>
                    </Stack>
                </Stack>
            </Flex>
        </>
    )
}

export default Home;