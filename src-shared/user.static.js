export default async function findOneOrCreate(id) {
    const record = await this.findOne({ id });
    if (record) {
        return record;
    }
    else {
        return this.create({ id });
    }
}
