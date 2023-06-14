using Grasshopper.Kernel.Types;

using Speckle.Core.Models;

namespace Rangekeeper.Components;

public class GH_Entity : GH_Goo<Entity>
{
    public override IGH_Goo Duplicate() => new GH_Entity() { m_value = m_value.ShallowCopy() as Entity };

    public override string ToString() =>
        string.Format("Rangekeeper Entity: {0} of Type: {1}", this.Value.name ?? "[Unnamed]", this.Value.type ?? "[Unspecified]");
    
    public override bool IsValid => m_value != null;
    
    public override string TypeName => "Rangekeeper Entity";
    
    public override string TypeDescription => "Represents a Rangekeeper Entity (that extends a Speckle Object)";

    public override bool CastFrom(object source)
    {
        switch (source)
        {
            case Entity entity:
                this.Value = entity;
                return true;
            case GH_Entity gooEntity:
                this.Value = gooEntity.Value;
                return true;
            
            case GH_Goo<Base> goo:
                if (goo.Value is Entity gooBaseEntity)
                {
                    this.Value = gooBaseEntity;
                    return true;
                }
                else if (goo.Value is Assembly gooBaseAssembly)
                {
                    this.Value = gooBaseAssembly;
                    return true;
                }
                break;
        }
        return false;
    }

    public override bool CastTo<Q>(ref Q target)
    {
        var success = false;
        var type = typeof(Q);
        
        if (type == typeof(Entity))
        {
            target = (Q)(object)this.Value;
            success = true;
        }
        
        else if (type == typeof(GH_Entity))
        {
            target = (Q)(object)new GH_Entity() { Value = this.Value };
            success = true;
        }
        
        else if (type == typeof(GH_Goo<Base>))
        {
            target = (Q)(object)(Base)this.Value;
            success = true;
        }

        return success;
    }
}