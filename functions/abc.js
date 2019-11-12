functions: [abc]
rules:
  my-rule:
    message: "{{error}}"
    given: "$.info"
    then:
      function: "abc"  