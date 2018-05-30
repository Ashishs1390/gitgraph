var myTemplateConfig = {
  colors: [ "orange", "green", "blue" ],
  branch: {
    color:"red",
    lineWidth: 2,
    spacingX: 50,
    mergeStyle: "bezier",
    showLabel: false,                 
  },
  commit: {
    spacingY: -120,
    dot: {
      color:"grey",
      size: 8,
      strokeColor: "#fff",
      strokeWidth: 4
    }
  }
};

var myTemplate = new GitGraph.Template( myTemplateConfig );
var config = {
  template: myTemplate,
  mode: "compact",
  orientation: "vertical"

}

var gitGraph = new GitGraph(config);

var master = gitGraph.branch({
  name:"master",
});

gitGraph.commit().commit().commit();

var develop = gitGraph.branch({
  parentBranch: master,
  name: "develop",
  color:"blue"
});
develop.commit();
master.commit({
  dotColor:"green"
});
develop.merge(master,{
  color:"green"
});
var feature1 = gitGraph.branch({
  parentBranch: develop,
  name: "feature/1",
  color: "violet"
});
feature1.commit("A feature to go into v1.0.0").commit({
  messageDisplay: false
});
feature1.merge(develop);
develop.merge(master);

