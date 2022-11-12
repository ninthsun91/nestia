import * as nest from "@nestjs/common";
import helper from "nestia-helper";

import { Userspace } from "../api/structures/Userspace";

@nest.Controller("userspace")
export class UserspaceController {
    @helper.TypedRoute.Get("type1")
    public async type1(): Promise<Userspace.UserType1> {
        return {
            id: "some-id",
        };
    }

    @nest.Get("type2")
    public async type2(): Promise<Userspace.UserType2> {
        return {
            id: "some-id",
            name: "some-name",
        };
    }
}
