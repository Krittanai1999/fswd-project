import { CustomerTC, UserTC } from "../../models";

CustomerTC.addRelation("author", {
  resolver: () => UserTC.getResolver("findById"),
  prepareArgs: {
    _id: (source) => source.authorId,
  },
  projection: { authorId: 1 },
});
