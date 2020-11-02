const querystring = require('querystring')
const axios = require('axios')
const { Octokit } = require('@octokit/core')
const octokit = new Octokit({
  auth: ``
})

const getRepos = async () => {
  const response = await octokit.request('GET /orgs/APOGEA/repos', {
    org: 'octokit',
    type: 'private'
  })
  console.log('getRepos -> response', response)
}

async function getData() {
  const { data } = await octokit.request('GET /users/rebolini-pablo')
  console.log('getData -> data', data)
}

// getRepos()
getData()
