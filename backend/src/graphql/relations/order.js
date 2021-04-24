import { OrderTC, ProductTC, PromotionTC, UserTC} from "../../models";
import moment from "moment";

OrderTC.addRelation("user",{
    resolver: () => UserTC.getResolver("findById"),
    prepareArgs: {
        _id: (source) => source.userId,
    },
    projection: {userId: 1}
});

OrderTC.addRelation("promotion", {
    resolver: () => PromotionTC.getResolver("findById"),
    prepareArgs: {
        _id: (source) => source.promotionID
    },
    projection: {promotionID: 1}
});

OrderTC.addRelation("products", {
    resolver: () => ProductTC.getResolver("findById"),
    prepareArgs:{
        _id:(source) => {
            const id = []
            source.productId.map((data) => id.push(data.id))
            return id
        },
    },
    projection: {productId: true},
});

OrderTC.addFields({
    timestamp: {
        type: 'String',
        resolve: (source) => moment(source.timestamp).fromNow(),
        projection: { timestamp: 1 },
    },
})
