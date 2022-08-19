const notes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')
const { describe, argv } = require('yargs')


// customize yargs version
yargs.version('1.1.0')

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        },
    },
    handler (argv) {
        notes.addNote(argv.title,argv.body)
    }
})

// create remove command 

yargs.command({
    command: 'remove',
    describe: 'Remove a note!',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
    },
    handler() {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler () {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Read the note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'

        }
    },
    handler (argv) {
        notes.readNote(argv.title)
    }
})
// add, remove, read, list

yargs.parse()

