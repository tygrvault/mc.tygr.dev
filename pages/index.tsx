import { Flex, Heading, Stack, Image, Text, Link, Spinner, Tooltip, Button } from '@chakra-ui/react';
import type { NextPage } from 'next'
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { BsCircleFill } from 'react-icons/bs';

const Home: NextPage = () => {
    const [status, setStatus] = useState("loading");
    const [pingData, setPingData] = useState(null);
    console.log(pingData)
    console.log(status)

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
                }
            } else {
                setPingData(data);
                setStatus('online');
            }
        }

        fetchData();

        const interval = setInterval(() => {
            fetchData();
        }, 500);
        return () => clearInterval(interval);
    }, []);


    return (
        <>
            <Head>
                <title>tyger&apos;s valley</title>
            </Head>
            <Flex h={"100vh"} top={"50%"} mx={"4vw"} alignItems={"center"} justifyContent={"center"} flexDirection="column">
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
                                        <Tooltip label={"Sorry."} placement={"top"} bg={"#fff"} color={"#000"}>
                                            <span>
                                                <BsCircleFill color={"red"} size={"12px"} />
                                            </span>
                                        </Tooltip>
                                        <Text color="#8F9094">The server is currently offline.</Text>
                                    </>
                                )}
                                {status === "unknown" && (
                                    <>
                                        <Tooltip label={"Sorry."} placement={"top"} bg={"#fff"} color={"#000"}>
                                            <span>
                                                <BsCircleFill color={"#F5A623"} size={"12px"} />
                                            </span>
                                        </Tooltip>
                                        <Text color="#8F9094">Unable to ping the server.</Text>
                                    </>
                                )}
                                {status === "online" && (
                                    <>
                                        <Tooltip label={`${pingData.latency}ms`} placement={"top"} bg={"#fff"} color={"#000"}>
                                            <span>
                                                <BsCircleFill color={"#22CC52"} size={"12px"} />
                                            </span>
                                        </Tooltip>
                                        <Text color="#8F9094">{pingData.players.online} / {pingData.players.max} players online.</Text>
                                    </>
                                )}
                            </Stack>
                            {/* <Tooltip label={"Click to copy."} placement={"top"} bg={"#fff"} color={"#000"} closeOnClick={false}> */}
                            <Heading onClick={() => {
                                navigator.clipboard.writeText("mc.tygr.dev")
                            }}>
                                mc.tygr.dev
                            </Heading>
                            {/* </Tooltip> */}
                            <Text textAlign={"center"} color="#8F9094" >
                                This server is invite-only.
                                <br />
                                To get access, you need to be invited by a member of the server.
                                <br />
                                By joining the server, you are agreeing to the <Link href="/guidelines" color="#fff">guidelines</Link>.
                                <br /><br />
                            </Text>
                            <Stack isInline spacing={4}>
                                <Link href="https://map.mc.tygr.dev" isExternal>
                                    <Button bg={"#fff"} color={"#000"} disabled={status !== "online"}>
                                        World Map
                                    </Button>
                                </Link>
                                <Link href="/rules">
                                    <Button bg={"#fff"} color={"#000"}>
                                        Guidelines
                                    </Button>
                                </Link>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Flex>
        </>
    )
}

export default Home;