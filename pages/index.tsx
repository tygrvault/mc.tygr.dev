import { Flex, Heading, Stack, Image, Text, Link, Spinner } from '@chakra-ui/react';
import type { NextPage } from 'next'
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { BsCircleFill } from 'react-icons/bs';

const Home: NextPage = () => {
    const [status, setStatus] = useState("loading");
    const [pingData, setPingData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/ping');
            const data = await res.json();

            if (data.error) {
                // ECONNREFUSED means the host is down
                if (data.error.code === "ECONNREFUSED") {
                    setPingData(null);
                    setStatus('offline');
                } else {
                    // Any other reason is unknown
                    setPingData(null);
                    setStatus('unknown');
                    return;
                }
            } else {
                setPingData(data);
                setStatus('online');
            }
        }

        fetchData();

        const interval = setInterval(() => {
            fetchData();
            console.log(status)
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
                            <Stack isInline spacing={2} align={"center"}>
                                {status === "loading" && (
                                    <>
                                        <Spinner color="#8F9094" size="sm" />
                                        <Text color="#8F9094">Pinging server...</Text>
                                    </>
                                )}
                                {status === "offline" && (
                                    <>
                                        <BsCircleFill color={"red"} size={"12px"} />
                                        <Text color="#8F9094">The server is currently offline.</Text>
                                    </>
                                )}
                                {status === "unknown" && (
                                    <>
                                        <BsCircleFill color={"#F5A623"} size={"12px"} />
                                        <Text color="#8F9094">Unable to ping the server.</Text>
                                    </>
                                )}
                                {status === "online" && (
                                    <>
                                        <BsCircleFill color={"#22CC52"} size={"12px"} />
                                        <Text color="#8F9094">{pingData.players.online} / {pingData.players.max} players online.</Text>
                                    </>
                                )}
                            </Stack>
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