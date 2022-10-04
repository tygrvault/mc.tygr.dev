import { Flex, Heading, Stack, Image, Text, Link, Divider, Button } from '@chakra-ui/react';
import type { NextPage } from 'next'
import Head from 'next/head';

const Rules: NextPage = () => {
    return (
        <>
            <Head>
                <title>tyger&apos;s valley - rules</title>
            </Head>
            <Flex m={8} alignItems={"center"} justifyContent={"center"} flexDirection="column">
                <Stack justifyContent={"center"} alignItems={"center"} spacing={8}>
                    <Image src="logo.png" alt={"logo"} w="128px" h="128px" />
                    <Stack justifyContent={"center"} alignItems={"center"} spacing={8} maxW="680px">
                        <Stack alignItems={"center"}>
                            <Heading>
                                Guidelines
                            </Heading>
                            <Text textAlign={"center"} color="#8F9094">
                                These are the guidelines for the tyger&apos;s valley Minecraft server, not for the Discord server. <br /> Please read them carefully.
                            </Text>
                        </Stack>
                        <Stack spacing={16} alignItems={"center"} textAlign={"center"} p={4} border={"1px"} rounded={"xl"}>
                            <Stack>
                                <Heading fontSize={"3xl"}>
                                    Vouching
                                </Heading>
                                <Text color="#8F9094">
                                    Any member of the server can vouch. The vouched member will be able to join the server.
                                    However, if anyone you have vouched for is banned, you will lose your ability to vouch again.
                                </Text>
                            </Stack>
                            <Stack>
                                <Heading fontSize={"3xl"}>
                                    Don&apos;t be a dick.
                                </Heading>
                                <Text color="#8F9094">
                                    Be a decent human being. Don&apos;t be racist, homophobic, transphobic, sexist, etc.
                                </Text>
                            </Stack>
                            <Stack>
                                <Heading fontSize={"3xl"}>
                                    Don&apos;t beg for access.
                                </Heading>
                                <Text color="#8F9094">
                                    If you are not vouched, you will not be able to join the server. And begging won&apos;t help.
                                </Text>
                            </Stack>
                            <Stack>
                                <Heading fontSize={"3xl"}>
                                    Have fun!
                                </Heading>
                                <Text color="#8F9094">
                                    We&apos;re all here to have fun. Don&apos;t ruin it for everyone else.
                                </Text>
                            </Stack>
                        </Stack>
                        <Link href="/">
                            <Button variant={"link"} color={"white"}>
                                🡐 Go back
                            </Button>
                        </Link>
                    </Stack>
                </Stack>
            </Flex>
        </>
    )
}

export default Rules;