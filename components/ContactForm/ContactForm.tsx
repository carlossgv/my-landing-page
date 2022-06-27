import {
  Button,
  Container,
  createStyles,
  Textarea,
  TextInput,
  Title,
  Text,
} from '@mantine/core';
import { useState } from 'react';
import pageData from '../../utils/page-data';

const useStyles = createStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: theme.colors.backgroundSecondary[0],
    paddingTop: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  content: {
    maxWidth: 555,
    margin: '0',
  },
  preTitle: {
    color: theme.colors.mutedText[0],
    textTransform: 'uppercase',
  },
  titleDot: {
    color: theme.colors.accent[0],
  },
  input: {
    '& input': {
      borderBottom: `1px solid ${theme.colors.mutedText[0]}`,
      marginBottom: 10,
    },
    '& textarea': {
      borderBottom: `1px solid ${theme.colors.mutedText[0]}`,
      marginBottom: 10,
    },
  },
  inputError: {
    '& input': {
      borderBottom: `1px solid ${theme.colors.error[0]}`,
      color: theme.colors.error[0],
      marginBottom: 10,
    },
    '& textarea': {
      borderBottom: `1px solid ${theme.colors.error[0]}`,
      color: theme.colors.error[0],
      marginBottom: 10,
    },
  },
  topInputContainer: {
    display: 'flex',
    alignContent: 'center',
    columnGap: 20,
    marginBottom: 20,
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: 'column',
      rowGap: 10,
    },
  },
  buttonContainer: {
    display: 'flex',
    alignContent: 'center',
    columnGap: 20,
    marginTop: 40,
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: 'column',
      rowGap: 20,
    },
  },
  button: {
    backgroundColor: theme.colors.accent[0],
    borderRadius: 0,

    fontSize: 20,
    '&:hover': {
      backgroundColor: theme.colors.accent[0],
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: '100%',
    },
  },
  linkContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    color: theme.colors.text[0],
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

type Props = {
  locale: string;
};

type InputProps = {
  text: string;
  error: boolean | string;
};

const ContactForm = ({ locale }: Props) => {
  const { classes } = useStyles();

  const PRE_TITLE = pageData.contactMe.preTitle[locale];
  const TITLE = pageData.contactMe.title[locale];
  const NAME_LABEL = pageData.contactMe.nameLabel[locale];
  const EMAIL_LABEL = pageData.contactMe.emailLabel[locale];
  const MESSAGE_LABEL = pageData.contactMe.messageLabel[locale];
  const BUTTON_TEXT = pageData.contactMe.buttonText[locale];
  const ADDITIONAL_EMAIL = pageData.contactMe.additionalEmail[locale];

  const [name, setName] = useState<InputProps>({ text: '', error: false });
  const [email, setEmail] = useState<InputProps>({ text: '', error: false });
  const [message, setMessage] = useState<InputProps>({
    text: '',
    error: false,
  });

  const handleSubmit = () => {
    console.log(name, email, message);
    // set all fields to error false but keep the text
    setName({ text: name.text, error: false });
    setEmail({ text: email.text, error: false });
    setMessage({ text: message.text, error: false });

    // validate if email is valid
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.text)) {
      setEmail({ ...email, error: 'Invalid email' });
    }

    // validate if any of the fields is empty
    if (name.text === '' || email.text === '' || message.text === '') {
      if (name.text === '') {
        setName({ ...name, error: 'This field is required' });
      }
      if (email.text === '') {
        setEmail({ ...email, error: 'This field is required' });
      }
      if (message.text === '') {
        setMessage({ ...message, error: 'This field is required' });
      }
    }

    // check if there are any errors
    if (name.error || email.error || message.error) {
      return;
    }

    // send email
    console.log('email sent');
  };

  return (
    <a id="contact-form">
      <Container className={classes.root} size={'xl'}>
        <Container className={classes.content}>
          <p className={classes.preTitle}>---- {PRE_TITLE}</p>
          <Title order={3} style={{ marginBottom: 40 }}>
            {TITLE}
            <span className={classes.titleDot}> .</span>
          </Title>
          <div className={classes.topInputContainer}>
            <TextInput
              placeholder={NAME_LABEL}
              required
              className={name.error ? classes.inputError : classes.input}
              variant={'unstyled'}
              value={name.text}
              onChange={(e) => setName({ ...name, text: e.target.value })}
              type="text"
              error={name.error}
            />
            <TextInput
              placeholder={EMAIL_LABEL}
              required
              className={name.error ? classes.inputError : classes.input}
              variant={'unstyled'}
              value={email.text}
              onChange={(e) => setEmail({ ...email, text: e.target.value })}
              type="email"
              error={email.error}
            />
          </div>
          <Textarea
            placeholder={MESSAGE_LABEL}
            required
            className={name.error ? classes.inputError : classes.input}
            variant={'unstyled'}
            value={message.text}
            onChange={(e) => setMessage({ ...message, text: e.target.value })}
            minRows={5}
            autosize
            error={message.error}
          />
          <div className={classes.buttonContainer}>
            <Button size="lg" className={classes.button} onClick={handleSubmit}>
              {BUTTON_TEXT}
            </Button>
            <div className={classes.textContainer}>
              <Text className={classes.preTitle} style={{ fontSize: 14 }}>
                {ADDITIONAL_EMAIL}
              </Text>
            </div>
            <div className={classes.linkContainer}>
              <a className={classes.link} href="mailto:carlossgv@gmail.com">
                CARLOSSGV@GMAIL.COM
              </a>
            </div>
          </div>
        </Container>
      </Container>
    </a>
  );
};

export default ContactForm;
