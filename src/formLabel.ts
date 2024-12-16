import type { Config } from 'payload'
const FormLabelPlugin = (config: Config) => {
  handleFormCollection(config)
  handleFormSubmissionCollection(config)

  return config
}

function handleFormSubmissionCollection(config: Config) {
  if (!config.collections) return
  const collection = config.collections.find((collection) => collection.slug === 'form-submissions')

  if (!collection) return

  collection.labels = {
    singular: {
      de: 'Formular-Eintrag',
      en: 'Form Submission',
    },
    plural: {
      de: 'Formular-Einträge',
      en: 'Form Submissions',
    },
  }

  // @ts-ignore
  collection.fields[0].label = {
    de: 'Formular',
    en: 'Form',
  }
  // @ts-ignore
  collection.fields[1].label = {
    de: 'Daten',
    en: 'Submission Data',
  }
  // @ts-ignore
  collection.fields[1].labels = {
    singular: {
      de: 'Feld',
      en: 'Field',
    },
    plural: {
      de: 'Felder',
      en: 'Fields',
    },
  }
  // @ts-ignore
  collection.fields[1].fields[0].label = {
    de: 'Feld',
    en: 'Field',
  }
  // @ts-ignore
  collection.fields[1].fields[1].label = {
    de: 'Wert',
    en: 'Value',
  }
}

function handleFormCollection(config: Config) {
  if (!config.collections) return
  // check if there's a forms collection
  const formsCollection = config.collections.find((collection) => collection.slug === 'forms')

  if (!formsCollection) {
    return config
  }

  formsCollection.labels = {
    singular: {
      de: 'Formular',
      en: 'Form',
    },
    plural: {
      de: 'Formulare',
      en: 'Forms',
    },
  }

  const labelMapping: {
    [key: string]: { label: any; labels?: any; callback?: (any: any) => void }
  } = {
    title: {
      label: {
        en: 'Title',
        de: 'Titel',
      },
    },
    fields: {
      label: {
        en: 'Fields',
        de: 'Felder',
      },
      labels: {
        singular: {
          en: 'Field',
          de: 'Feld',
        },
        plural: {
          en: 'Fields',
          de: 'Felder',
        },
      },
      callback: (field) => {
        const blockLabelMapping: any = {
          email: {
            labels: {
              singular: {
                en: 'Email Field',
                de: 'Emailfeld',
              },
              plural: {
                en: 'Email Fields',
                de: 'Emailfelder',
              },
            },
            fields: [
              {
                fields: [
                  {
                    name: 'name',
                    label: {
                      de: 'Name (kleingeschrieben, keine Sonderzeichen)',
                      en: 'Name (lowercase, no special characters)',
                    },
                    required: true,
                    type: 'text',
                    admin: {
                      width: '50%',
                    },
                  },
                  {
                    name: 'label',
                    label: {
                      de: 'Bezeichung',
                      en: 'Label',
                    },
                    localized: true,
                    type: 'text',
                    admin: {
                      width: '50%',
                    },
                  },
                ],
                type: 'row',
              },
              {
                name: 'required',
                label: {
                  de: 'Erforderlich',
                  en: 'Required',
                },
                type: 'checkbox',
              },
            ],
          },
          select: {
            labels: {
              singular: {
                en: 'Select Field',
                de: 'Auswahlfeld',
              },
              plural: {
                en: 'Select Fields',
                de: 'Auswahlfelder',
              },
            },
            fields: [
              {
                fields: [
                  {
                    name: 'name',
                    label: {
                      de: 'Name (kleingeschrieben, keine Sonderzeichen)',
                      en: 'Name (lowercase, no special characters)',
                    },
                    required: true,
                    type: 'text',
                    admin: {
                      width: '50%',
                    },
                  },
                  {
                    name: 'label',
                    label: {
                      de: 'Bezeichung',
                      en: 'Label',
                    },
                    localized: true,
                    type: 'text',
                    admin: {
                      width: '50%',
                    },
                  },
                ],
                type: 'row',
              },
              {
                name: 'options',
                fields: [
                  {
                    fields: [
                      {
                        name: 'label',
                        admin: {
                          width: '50%',
                        },
                        label: {
                          de: 'Bezeichung',
                          en: 'Label',
                        },
                        localized: true,
                        required: true,
                        type: 'text',
                      },
                      {
                        name: 'value',
                        admin: {
                          width: '50%',
                        },
                        label: {
                          de: 'Wert',
                          en: 'Value',
                        },
                        required: true,
                        type: 'text',
                      },
                    ],
                    type: 'row',
                  },
                ],
                label: {
                  de: 'Auswahl Attribut Optionen',
                  en: 'Select Attribute Options',
                },
                labels: {
                  plural: {
                    de: 'Optionen',
                    en: 'Options',
                  },
                  singular: 'Option',
                },
                type: 'array',
              },
              {
                name: 'required',
                label: {
                  de: 'Erforderlich',
                  en: 'Required',
                },
                type: 'checkbox',
              },
            ],
          },
          text: {
            labels: {
              singular: {
                en: 'Text Field',
                de: 'Textfeld',
              },
              plural: {
                en: 'Text Fields',
                de: 'Textfelder',
              },
            },
            fields: [
              {
                fields: [
                  {
                    name: 'name',
                    label: {
                      de: 'Name (kleingeschrieben, keine Sonderzeichen)',
                      en: 'Name (lowercase, no special characters)',
                    },
                    required: true,
                    type: 'text',
                    admin: {
                      width: '50%',
                    },
                  },
                  {
                    name: 'label',
                    label: {
                      de: 'Bezeichung',
                      en: 'Label',
                    },
                    localized: true,
                    type: 'text',
                    admin: {
                      width: '50%',
                    },
                  },
                ],
                type: 'row',
              },
              {
                name: 'required',
                label: {
                  de: 'Erforderlich',
                  en: 'Required',
                },
                type: 'checkbox',
              },
            ],
          },
        }

        for (const block of field.blocks) {
          if (blockLabelMapping[block.slug]) {
            // block.label = blockLabelMapping[block.slug].label;
            block.labels = blockLabelMapping[block.slug].labels
            block.fields = blockLabelMapping[block.slug].fields
          }
        }
      },
    },
    submitButtonLabel: {
      label: {
        en: 'Submit Button Label',
        de: 'CTA Bezeichnung',
      },
    },
    confirmationType: {
      label: {
        en: 'Confirmation Type',
        de: 'Bestätigungstyp',
      },
      callback: (field) => {
        field.admin.condition = () => false
      },
    },
    confirmationMessage: {
      label: {
        de: 'Bestätigungsnachricht',
        en: 'Confirmation Message',
      },
    },
    emails: {
      label: {
        en: 'Emails',
        de: 'Emails',
      },
      callback: (field) => {
        field.admin.condition = () => false
      },
    },
  }

  for (const field of formsCollection.fields) {
    // @ts-ignore
    if (labelMapping[field.name]) {
      // @ts-ignore
      field.label = labelMapping[field.name].label

      // @ts-ignore
      if (labelMapping[field.name].labels) {
        // @ts-ignore
        field.labels = labelMapping[field.name].labels
      }

      // @ts-ignore
      if (labelMapping[field.name].callback) {
        // @ts-ignore
        labelMapping[field.name].callback(field)
      }
    }
  }

  // @ts-ignore
  formsCollection.fields[0].label = {
    en: 'Title',
    de: 'Titel',
  }
}

export default FormLabelPlugin
