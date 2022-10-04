import { Flex, Heading, Stack, Image, Text, Link, Divider, Button } from '@chakra-ui/react';
import type { NextPage } from 'next'
import Head from 'next/head';

const Rules: NextPage = () => {
    return (
        <>
            <Head>
                <title>tyger&apos;s valley - rules</title>
            </Head>
            <Flex py={8} px={4} minHeight={"100vh"} alignItems={"center"} justifyContent={"center"} flexDirection="column">
                <Stack justifyContent={"center"} alignItems={"center"} spacing={8}>
                    <Image src="logo.png" alt={"logo"} w="128px" h="128px" />
                    <Stack justifyContent={"center"} alignItems={"center"} spacing={8} maxW="680px">
                        <Stack alignItems={"center"}>
                            <u>
                                <Heading fontSize={["2xl", "3xl", "4xl"]}>
                                    Guidelines
                                </Heading>
                            </u>
                        </Stack>
                        <Stack spacing={16} alignItems={"center"} textAlign={"center"} p={4}>
                            <Stack>
                                <Heading fontSize={["xl", "2xl", "3xl"]}>
                                    Vouching
                                </Heading>
                                <Text color="#8F9094">
                                    Any member of the server can vouch. The vouched member will be able to join the server.
                                    However, if anyone you have vouched for is banned, you will lose your ability to vouch again.
                                </Text>
                            </Stack>
                            <Stack>
                                <Heading fontSize={["xl", "2xl", "3xl"]}>
                                    Use common sense.
                                </Heading>
                                <Text color="#8F9094">
                                    Be a decent human being. Don&apos;t be racist, homophobic, transphobic, sexist, etc. <br /> Don&apos;t greif, steal, cheat, etc.
                                </Text>
                            </Stack>
                            <Stack>
                                <Heading fontSize={["xl", "2xl", "3xl"]}>
                                    Have fun!
                                </Heading>
                                <Text color="#8F9094">
                                    We&apos;re all here to have fun. Don&apos;t ruin it for everyone else.
                                </Text>
                            </Stack>
                        </Stack>
                        <Link href="/">
                            <Button variant={"solid"} bg={"#fff"} color={"#000"}>
                                Go back
                            </Button>
                        </Link>
                    </Stack>
                </Stack>
            </Flex>
        </>
    )
}

export default Rules;