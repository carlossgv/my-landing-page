import {
  Button,
  Container,
  createStyles,
  Textarea,
  TextInput,
  Title,
  Text,
  LoadingOverlay,
} from '@mantine/core';
import { useForm } from '@mantine/form';
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
    width: '100%',
    '& input': {
      border: 'none',
      borderBottom: `1px solid ${theme.colors.mutedText[0]}`,
      marginBottom: 10,
      borderWidth: 1,
    },
    '& .mantine-TextInput-invalid': {
      color: theme.colors.error[0],
      border: 'none',
      borderBottom: `1px solid ${theme.colors.error[0]}`,
    },
    '& textarea': {
      border: 'none',
      borderBottom: `1px solid ${theme.colors.mutedText[0]}`,
      marginBottom: 10,
      borderWidth: 1,
    },
    '& .mantine-Textarea-invalid': {
      color: theme.colors.error[0],
      border: 'none',
      borderBottom: `1px solid ${theme.colors.error[0]}`,
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
  const EMPTY_ERROR = pageData.contactMe.emptyFieldError[locale];
  const INVALID_EMAIL_ERROR = pageData.contactMe.invalidEmailError[locale];

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },

    validate: {
      name: (value) => (value.length < 1 ? EMPTY_ERROR : null),
      message: (value) => (value.length < 1 ? EMPTY_ERROR : null),
      email: (value) =>
        value.length < 1
          ? EMPTY_ERROR
          : /^\S+@\S+$/.test(value)
          ? null
          : INVALID_EMAIL_ERROR,
    },
  });

  const sendValidatedEmail = async (values: {
    name: string;
    email: string;
    message: string;
  }) => {
    console.log(values);
    try {
      setIsLoading(true);
      await fetch('api/sendgrid', {
        method: 'POST',
        body: JSON.stringify({
          name: values.name,
          html: `FROM: ${values.email} \n  MESSAGE: ${values.message}`,
        }),
      });
      form.reset();
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <a id="contact-form">
      <Container
        className={classes.root}
        size={'xl'}
        style={{ position: 'relative' }}
      >
        <LoadingOverlay visible={isLoading} />
        <Container className={classes.content}>
          <form
            onSubmit={form.onSubmit((values) =>
              form.validate().hasErrors ? null : sendValidatedEmail(values)
            )}
          >
            <p className={classes.preTitle}>---- {PRE_TITLE}</p>
            <Title order={3} style={{ marginBottom: 40 }}>
              {TITLE}
              <span className={classes.titleDot}> .</span>
            </Title>

            <div className={classes.topInputContainer}>
              <TextInput
                placeholder={NAME_LABEL}
                variant={'unstyled'}
                className={classes.input}
                {...form.getInputProps('name')}
              />
              <TextInput
                placeholder={EMAIL_LABEL}
                variant={'unstyled'}
                className={classes.input}
                {...form.getInputProps('email')}
              />
            </div>
            <Textarea
              placeholder={MESSAGE_LABEL}
              variant={'unstyled'}
              autosize
              minRows={5}
              className={classes.input}
              {...form.getInputProps('message')}
            />
            <div className={classes.buttonContainer}>
              <Button size="lg" className={classes.button} type="submit">
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
          </form>
        </Container>
      </Container>
    </a>
  );
};

export default ContactForm;
