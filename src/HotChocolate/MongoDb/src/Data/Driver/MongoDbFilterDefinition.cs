using MongoDB.Bson;
using MongoDB.Bson.Serialization;
using MongoDB.Driver;
using MongoDB.Driver.Linq;

namespace HotChocolate.Data.MongoDb
{
    public abstract class MongoDbFilterDefinition : FilterDefinition<BsonDocument>
    {
        public abstract BsonDocument Render(
            IBsonSerializer documentSerializer,
            IBsonSerializerRegistry serializerRegistry);

        public override BsonDocument Render(
            IBsonSerializer<BsonDocument> documentSerializer,
            IBsonSerializerRegistry serializerRegistry)
        {
            return Render(documentSerializer, serializerRegistry);
        }

        public override BsonDocument Render(
            IBsonSerializer<BsonDocument> documentSerializer,
            IBsonSerializerRegistry serializerRegistry,
            LinqProvider provider)
        {
            return Render(documentSerializer, serializerRegistry);
        }

        public FilterDefinition<T> ToFilterDefinition<T>() => new FilterDefinitionWrapper<T>(this);

        private sealed class FilterDefinitionWrapper<T> : FilterDefinition<T>
        {
            private readonly MongoDbFilterDefinition _filter;

            public FilterDefinitionWrapper(MongoDbFilterDefinition filter)
            {
                _filter = filter;
            }

            public override BsonDocument Render(
                IBsonSerializer<T> documentSerializer,
                IBsonSerializerRegistry serializerRegistry)
            {
                return _filter.Render(documentSerializer, serializerRegistry);
            }

            public override BsonDocument Render(
                IBsonSerializer<T> documentSerializer,
                IBsonSerializerRegistry serializerRegistry,
                LinqProvider provider)
            {
                return Render(documentSerializer, serializerRegistry);
            }
        }
    }
}
