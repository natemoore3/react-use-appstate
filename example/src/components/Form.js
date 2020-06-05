import React from 'react'
import JSONPretty from 'react-json-pretty'
import { useAppState } from 'react-use-appstate'
import {
    Grid,
    Card,
    Typography,
    AppBar,
    Toolbar,
    Button,
    TextField,
    CircularProgress,
    IconButton
} from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
import useDemoState from '../hooks/useDemoState'

export default function Form({ state, setState, step, next }) {
    const [appState] = useAppState();
    const {
        state: {
            data: demoData
        }
    } = useDemoState()
    const { data, loading } = state

    return (
        <Grid container justify='center' alignContent='center' spacing={4}>
            <AppBar>
                <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant='h6'>react-use-appstate Demo</Typography>
                    <IconButton
                        onClick={() => {
                            window.location.assign('https://github.com/natemoore3/react-use-appstate');
                        }}
                    >
                        <GitHubIcon style={{ fill: "#ffffff" }} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Grid item xs={9} style={{ marginTop: 100 }}>
                <Card style={{ padding: '24px 100px', minHeight: 275 }}>
                    <Typography variant='h5'>Demo Form</Typography>
                    <form onSubmit={next}>
                        {loading ? (
                            <div style={{ textAlign: 'center' }}>
                                <CircularProgress />
                            </div>
                        ) : (
                            <>
                                {step === 1 && (
                                    <>
                                        <TextField
                                            value={data.firstName}
                                            variant='outlined'
                                            label='First Name'
                                            name='firstName'
                                            onChange={(e) =>
                                                setState({
                                                    [e.target.name]:
                                                        e.target.value
                                                })
                                            }
                                            margin='normal'
                                            fullWidth
                                        />
                                        <TextField
                                            value={data.lastName}
                                            variant='outlined'
                                            label='Last Name'
                                            name='lastName'
                                            onChange={(e) =>
                                                setState({
                                                    [e.target.name]:
                                                        e.target.value
                                                })
                                            }
                                            margin='normal'
                                            fullWidth
                                        />
                                    </>
                                )}
                                {step === 2 && (
                                    <>
                                        <TextField
                                            value={data.email}
                                            variant='outlined'
                                            label='Email'
                                            name='email'
                                            onChange={(e) =>
                                                setState({
                                                    [e.target.name]:
                                                        e.target.value
                                                })
                                            }
                                            margin='normal'
                                            fullWidth
                                        />
                                        <TextField
                                            value={data.phoneNumber}
                                            variant='outlined'
                                            label='Phone Number'
                                            name='phone'
                                            onChange={(e) =>
                                                setState({
                                                    [e.target.name]:
                                                        e.target.value
                                                })
                                            }
                                            margin='normal'
                                            fullWidth
                                        />
                                    </>
                                )}
                                {step === 1 && (
                                    <Button
                                        variant='contained'
                                        color='secondary'
                                        style={{ marginTop: 24 }}
                                        onClick={next}
                                        type='submit'
                                    >
                                        Next
                                    </Button>
                                )}
                            </>
                        )}
                    </form>
                </Card>
            </Grid>
            <Grid item md={4}>
                <Card style={{ padding: '24px 100px' }}>
                    <div>
                        <Typography variant='h5' style={{ marginBottom: 10 }}>
                        useForm Hook
                        </Typography>
                        <JSONPretty
                            id='json-state'
                            data={state}
                            theme={{
                                main:
                                    'line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;padding:12px',
                                error:
                                    'line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;',
                                key: 'color:#f92672;',
                                string: 'color:#fd971f;',
                                value: 'color:#a6e22e;',
                                boolean: 'color:#ac81fe;'
                            }}
                        />
                    </div>
                    <div>
                        <Typography variant='h5' style={{ marginBottom: 10 }}>
                        useDemoState Hook
                        </Typography>
                        <JSONPretty
                            id='json-state'
                            data={demoData}
                            theme={{
                                main:
                                    'line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;padding:12px',
                                error:
                                    'line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;',
                                key: 'color:#f92672;',
                                string: 'color:#fd971f;',
                                value: 'color:#a6e22e;',
                                boolean: 'color:#ac81fe;'
                            }}
                        />
                    </div>
                </Card>
            </Grid>
            <Grid item md={4}>
                <Card style={{ padding: '24px 100px' }}>
                    <Typography variant='h5' style={{ marginBottom: 10 }}>
                        App State
                    </Typography>
                    <JSONPretty
                        id='json-state'
                        data={appState}
                        theme={{
                            main:
                                'line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;padding:12px',
                            error:
                                'line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;',
                            key: 'color:#f92672;',
                            string: 'color:#fd971f;',
                            value: 'color:#a6e22e;',
                            boolean: 'color:#ac81fe;'
                        }}
                    />
                </Card>
            </Grid>
        </Grid>
    )
}
